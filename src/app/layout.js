import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title:
    "Casagrand Chennai - Premium Homes & Apartments | RERA Approved Projects",
  description:
    "Explore premium Casagrand residential projects in Chennai. Get instant access to floor plans, pricing, and exclusive offers. RERA approved developments with 20+ years of excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
