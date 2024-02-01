import type { Metadata } from "next";
import "./globals.css";
import Header from "@/lib/Header/Header";
import Footer from "@/lib/Footer/Footer";

export const metadata: Metadata = {
  title: "Doable",
  description: "Doable is a B2B thought leadership platform for trade news and insights across every industry. We offer our readers and viewers breaking news and insights from the top minds in technology, wellness, finance, and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="all" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
