import { Suspense } from 'react';
import UTMTracker from "@/components/UTMTracker";
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
    "Casagrand - Premium Homes & Apartments | RERA Approved Projects",
  description:
    "Explore premium Casagrand residential projects in Bangalore. Get instant access to floor plans, pricing, and exclusive offers. RERA approved developments with 20+ years of excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9BLNNQ9');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        // className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9BLNNQ9"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Suspense fallback={null}>
            <UTMTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
