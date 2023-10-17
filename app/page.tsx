"use client";

import Brand from "@/src/components/sections/Brand";
import Introduction from "@/src/components/sections/Introduction";
import AboutUs from "@/src/components/sections/AboutUs";
import OurPets from "@/src/components/sections/OurPets";
import FAQ from "@/src/components/sections/FAQ";
import Footer from "@/src/components/general/Footer";

export default function Home() {
  return (
    <main>
      <Brand />
      <Introduction />
      <AboutUs />
      <OurPets />
      <FAQ />
      <Footer />
    </main>
  );
}
