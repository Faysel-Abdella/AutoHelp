import Image from "next/image";
import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import HowItWorks from "./sections/HowItWorks";
import WhyUs from "./sections/WhyUs";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <React.Fragment>
      <section className="relative min-h-screen pb-10">
        <figure className="-z-10 absolute top-0 left-0 w-full h-full">
          <Image
            src={"/backgrounds/hero.svg"}
            width={1512}
            height={969}
            alt="America"
            className="w-full h-full object-cover object-center"
            priority
          />

          <div className="-z-20 absolute top-0 left-0 w-full h-full bg-secondaryBackground"></div>
        </figure>

        <Navbar />

        <HeroSection />
      </section>

      <ServicesSection />
      <WhyUs />
      <HowItWorks />
      <Features />
      <Testimonials />

      <footer></footer>
    </React.Fragment>
  );
}
