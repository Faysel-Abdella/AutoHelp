import React from "react";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";

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

      <div className="mt-12 flex items-center justify-center gap-6">
        <div className="bg-white h-[450px] w-[318px] p-8 bg-[url(/backgrounds/service-car.png)] border-2 border-card drop-shadow-card rounded-large flex items-end ">
          <div>
            <Image
              src={"/icons/search-normal.svg"}
              width={48}
              height={48}
              alt="Find Reliable Cars at Fair Prices"
              loading="lazy"
            />

            <h4 className="mt-7 font-lora font-bold text-xl leading-6 text-foreground">
              Find Reliable Cars at Fair Prices –{" "}
              <span className="font-normal">
                No overpaying, no hidden issues.
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
