import { MoveRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const Feature = () => {
  return (
    <section
      className="relative bg-foreground
        border border-secondary rounded-large drop-shadow-statistics py-11 px-10
        "
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dashed.webp)] bg-center bg-no-repeat bg-cover" />

      <div className="flex items-center justify-center">
        <aside>
          <div className="flex items-center justify-start">
            <SectionHeader title="Features" />
          </div>
          <h2 className="mt-6 text-white font-lora font-bold text-[40px leading-[54px]]">
            Newcomer Guarantee: <br /> No Savings? No Fee.
          </h2>
          <p className="mt-6 font-inter font-medium text-lg leading-8 text-white">
            If we can&rsquo;t get you a better deal than you&rsquo;d find on
            your own, you don&rsquo;t pay us a cent.
          </p>
          <div className="flex items-center justify-center gap-1">
            <p className="font-inter font-medium text-lg leading-8 text-white underline underline-offset-2">
              Start Your Journey Today
            </p>
            <MoveRight className="text-white" />
          </div>
        </aside>
        <aside></aside>
      </div>
    </section>
  );
};

export default Feature;
