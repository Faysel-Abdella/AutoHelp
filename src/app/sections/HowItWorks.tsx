import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Step from "../components/Step";

const HowItWorks = () => {
  return (
    <section className="py-20  bg-secondaryBackground">
      <div className="flex items-center justify-center">
        <SectionHeader title="How It Works" />
      </div>

      <h2 className="mt-10 text-foreground font-lora text-6xl text-center leading-[64px] font-bold">
        Get Your Car in 3 Easy Steps
      </h2>

      <div className="flex items-center justify-center gap-14 mt-20">
        <Step
          icon="/icons/consultation.svg"
          alt="Get free consultation about your first car in U.S."
          step={1}
          stepImage={
            <Image
              src={"/icons/step-1.svg"}
              alt="Get free consultation about your first car in U.S."
              width="50"
              height="112"
            />
          }
          title="Free Consultation"
          description="Share your budget & concerns with a dedicated advisor."
          key={1}
        />
        <Step
          icon="/icons/plan.svg"
          alt="Get custom plan about your first car in U.S."
          step={2}
          stepImage={
            <Image
              src={"/icons/step-2.svg"}
              alt="Get custom plan about your first car in U.S."
              width="119"
              height="166"
            />
          }
          title="Custom Plan"
          description="Get a personalized roadmap for car selection, financing & more."
          key={2}
        />
        <Step
          icon="/icons/support.svg"
          alt="Get full support about your first car in U.S."
          step={3}
          stepImage={
            <Image
              src={"/icons/step-3.svg"}
              alt="Get full support about your first car in U.S."
              width="83"
              height="112"
            />
          }
          title="Full Support"
          description="From consultation to purchase, we support you completely."
          key={3}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
