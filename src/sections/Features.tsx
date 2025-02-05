import SectionHeader from "@/components/SectionHeader";
import Bonus from "@/components/Bonus";
import CTAButton from "@/components/CTAButton";

const Features = () => {
  return (
    <section
      className="relative bg-foreground drop-shadow-statistics py-28 px-10
        "
    >
      <div className=" absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dashed.webp)] bg-center bg-no-repeat bg-cover" />

      <div className="flex max-lg:flex-col items-center justify-center gap-9">
        <aside className="z-10">
          <div className="flex items-center justify-start">
            <SectionHeader title="Features" />
          </div>

          <h2 className="mt-6 text-white font-lora font-bold text-[40px] leading-[54px]">
            Newcomer Guarantee: <br /> No Savings? No Fee.
          </h2>

          <p className="mt-6 font-inter font-medium text-lg leading-8 text-white">
            If we can&rsquo;t get you a better deal than you&rsquo;d find on
            your own, <br /> you don&rsquo;t pay us a cent.
          </p>

          <div className="mt-11 flex items-center gap-1 cursor-pointer hover:scale-105 transition-all ease-out">
            <CTAButton label="Start Your Journey Today" />
          </div>
        </aside>

        <aside className="max-lg:mt-10 max-lg:w-full">
          <Bonus />
        </aside>
      </div>
    </section>
  );
};

export default Features;
