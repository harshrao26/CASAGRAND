import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      projectInterested,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      preferredApartmentType,
    } = body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Splitting full name into first and last name
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName =
      nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Unknown";

    const salesforcePayload = {
      FirstName: firstName,
      LastName: lastName,
      Company: "Website Lead", // Default or could be passed from frontend
      Email: email,
      Project_Interested__c: projectInterested || "Landing Page Inquiry",
      LeadSource: "Landing Page",
      Secondary_source__c: "",
      Tertiary_Source__c: "",
      utm_campaign__c: utm_campaign || "",
      utm_content__c: utm_content || "",
      utm_medium__c: utm_medium || "",
      utm_source__c: utm_source || "",
      utm_term__c: utm_term || "",
      Locality_Preferred__c: "",
      Call_Summary__c: "Website Lead Submission",
      Preferred_Apartment_Type__c: preferredApartmentType || "",
      MobilePhone: phone.startsWith("+") ? phone : `+91${phone}`,
    };

    console.log(
      "Pushing Lead to Salesforce:",
      JSON.stringify(salesforcePayload, null, 2),
    );

    const response = await fetch(
      "https://casagrandbuilderprivatelimited--sfps.sandbox.my.salesforce-sites.com/services/apexrest/LeadGen?APIKey=7684921058394726",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(salesforcePayload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Salesforce Error Response:", errorText);
      throw new Error(
        `Failed to push to Salesforce: ${response.status} ${response.statusText}`,
      );
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
