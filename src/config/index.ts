import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "Lexington Ashworth | Trusted UK Immigration & Estate Solicitors",
    template: "%s | Lexington Ashworth"
  },
  description:
    "Lexington Ashworth is a Manchester-based law firm offering expert immigration and estate planning services across the UK. Trusted solicitors. Proven results. Free initial consultation.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico"
      }
    ]
  },
  openGraph: {
    title: "Lexington Ashworth | Immigration & Estate Planning Solicitors",
    description:
      "Expert legal support for UK immigration, wills, and estate planning. Over 15 years of solicitor experience. Based in Manchester. Book your free consultation today.",
    images: [
      {
        url: "/assets/Cut_logo.png"
      }
    ],
    url: "https://lexingtonashworth.co.uk", // replace with your actual domain
    siteName: "Lexington Ashworth"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@LexingtonLawUK", // update with your actual Twitter handle if available
    title: "Lexington Ashworth | Expert UK Immigration & Estate Planning",
    description:
      "Trusted solicitors offering legal clarity for UK immigration and estate matters. Book your free consultation with Lexington Ashworth today.",
    images: [
      {
        url: "/assets/og-image.png"
      }
    ]
  },
  metadataBase: new URL("https://lexingtonashworth.co.uk") // replace with live domain
};
