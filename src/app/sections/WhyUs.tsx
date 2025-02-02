import Image from "next/image";
import SectionHeader from "../components/SectionHeader";

const WhyUs = () => {
  return (
    <section className="py-20  bg-background">
      <div className="flex items-center justify-center">
        <SectionHeader title="Why Us?" />
      </div>

      <h2 className="mt-10 text-foreground font-lora text-6xl text-center leading-[64px] font-bold">
        Why Newcomers Trust Us
      </h2>

      <div className="mt-20 flex items-center justify-center gap-8">
        <div className="w-96 bg-secondaryBackground border-light border-card drop-shadow-card py-10 px-9 text-foreground">
          <Image
            src={"/icons/language.svg"}
            alt="AutoHelpUS speaks your language"
            width={54}
            height={54}
          />
          <h2 className="font-lora font-bold text-[32px] leading-10">
            We Speak Your Language
          </h2>
          <p className="font-inter font-medium text-lg leading-8">
            Car buying is complicated enough—language barriers shouldn&rsquo;t
            make it harder. Our multilingual team offers support in various
            languages as needed.
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default WhyUs;
