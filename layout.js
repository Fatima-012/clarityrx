import "./globals.css";
import Preloader from "@/components/Preloader";
import PageFX from "@/components/PageFX";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ------------------------------------------------------------------------
   Fonts — loaded at runtime via the Google Fonts <link> tags below (not
   next/font/google, which needs network access at *build* time — plain
   <link> tags fetch in the visitor's browser instead, which is simpler to
   reason about and works identically on every host). To change fonts,
   edit both the <link> href below and the --font-serif/--font-sans/
   --font-mono values in app/globals.css.
   ------------------------------------------------------------------------ */

export const metadata = {
  metadataBase: new URL("https://clarityrx.example.com"),
  title: "ClarityRx — Editing for Health-Science Students",
  description:
    "ClarityRx is specialized editing and proofreading for nursing, pre-med, pre-pharmacy, and allied health students — SOAP notes, care plans, pharmacology case studies, and clinical writing, refined without rewriting your voice.",
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon.ico" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "ClarityRx — Editing for Health-Science Students",
    description:
      "Specialized editing for SOAP notes, care plans, pharmacology case studies, and clinical writing. Your ideas, your voice — refined for clarity.",
    images: ["/assets/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#FBF7F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="intro-active">
        <Preloader />
        <PageFX />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
