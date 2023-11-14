import type { Metadata } from "next";
import "../globals.css";
import Header from "@/lib/Header/Header";
import Footer from "@/lib/Footer/Footer";

export const metadata: Metadata = {
  title: "Doable",
  description: "Conversations over content",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
