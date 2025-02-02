import React from "react";
import SectionHeader from "../components/SectionHeader";

const HowItWorks = () => {
  return (
    <section className="py-20  bg-secondaryBackground">
      <div className="flex items-center justify-center">
        <SectionHeader title="How It Works" />
      </div>

      <h2 className="mt-10 text-foreground font-lora text-6xl text-center leading-[64px] font-bold">
        Get Your Car in 3 Easy Steps
      </h2>
    </section>
  );
};

export default HowItWorks;
