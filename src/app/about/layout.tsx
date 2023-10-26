import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "About",
  description: "Conversations over Content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
