"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { SessionsGrid } from "@/components/sessions-grid";
import { AboutPreview } from "@/components/about-preview";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <SessionsGrid />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
