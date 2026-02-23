import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Salesforce Web-to-Lead or Custom REST API POST
    // For a standard Web-to-lead, we use application/x-www-form-urlencoded
    const salesforceOid = process.env.SALESFORCE_OID; // Set this in your .env.local

    // If an OID is provided, we use the standard Web-To-Lead submission
    // Otherwise, this can be adapted for the Salesforce REST API by acquiring a token
    if (salesforceOid) {
      const formData = new URLSearchParams();
      formData.append("oid", salesforceOid);
      // Splitting full name into first and last name as usually expected by SF,
      // or mapping to a custom field. Here we use standard first/last name.
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0];
      const lastName =
        nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Unknown";

      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      // Optional: specify a redirect or standard lead source
      formData.append("lead_source", "Website Landing Page");

      const response = await fetch(
        "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to push to Salesforce");
      }
    } else {
      // Mock success if no environment variable is set yet (for development)
      console.log("Salesforce Lead Data Received (No OID Configured):", {
        fullName,
        email,
        phone,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead successfully pushed to CRM",
    });
  } catch (error) {
    console.error("Salesforce API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
