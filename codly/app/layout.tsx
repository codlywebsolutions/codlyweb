import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/navbar";
import Footer from "@/components/Navigation/footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codly-Websolutions",
  description: "Codly WebSolutions is your trusted partner for cutting-edge digital experiences.",
  keywords: [
    "web development",
    "web design",
    "SEO",
    "digital agency",
    "Codly",
  
  ],
  openGraph: {
    title: "Codly-Websolutions",
    description: "Codly WebSolutions is your trusted partner for cutting-edge digital experiences.",
    url: "https://codlywebsolution.site",
    siteName: "Codly WebSolutions",
    images: [
      {
        url: "/logo2.png",
        width: 512,
        height: 512,
        alt: "Codly Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codly-Websolutions",
    description: "Codly WebSolutions is your trusted partner for cutting-edge digital experiences.",
    images: ["/logo2.png"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/" />
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        {/* Additional SEO tags */}
        <meta name="author" content="Codly WebSolutions" />
        <meta name="copyright" content="Codly WebSolutions" />
        {/* LocalBusiness Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Codly Websolutions",
              address: {
                addressLocality: "Kerala",
                addressRegion: "KL",
                addressCountry: "IN"
              },
              url: "https://codlywebsolutions.site",
              telephone: "+91-9037314953"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
