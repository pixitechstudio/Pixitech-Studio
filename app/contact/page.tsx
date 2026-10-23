import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Pixitech Studio",
  description: "Contact Pixitech Studio in Attock, Pakistan by email, phone, WhatsApp or the project form. We serve clients across Pakistan and worldwide.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pagehead"><div className="wrap"><h1>Contact Pixitech Studio</h1></div></section>
      <ContactSection />
    </>
  );
}
