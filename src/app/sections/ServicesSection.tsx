import React from "react";
import SectionHeader from "../components/SectionHeader";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondaryBackground">
      <div className="flex justify-center items-center">
        <SectionHeader title="Services" />
      </div>

      <h2 className="mt-6 text-foreground font-lora text-6xl text-center leading-[64px] font-bold">
        We&rsquo;ve Been in Your Shoes—And <br /> We Know the Way Forward
      </h2>

      <p className=" mt-5 text-foreground font-medium text-xl text-center font-inter leading-8">
        Our team of experts understands what it&rsquo;s like to buy a car as a
        newcomer. <br />
        We&rsquo;ve helped thousands of people just like you:
      </p>
    </section>
  );
};

export default ServicesSection;
