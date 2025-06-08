// app/about/page.js
"use client";

import AboutSection from "@/components/AboutSection";
import ContactLinks from "@/components/ContactLinks";

export default function AboutPage() {
  return (
    <main className="p-6">
      <AboutSection />
      <ContactLinks />
    </main>
  );
}
