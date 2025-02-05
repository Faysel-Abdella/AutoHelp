import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import SmallService from "@/components/SmallService";

const ServicesSection = () => {
  return (
    <section className="relative py-20 px-4 bg-secondaryBackground">
      <div className="flex justify-center items-center">
        <SectionHeader title="Services" />
      </div>

      <h2 className="mt-10 text-foreground font-lora text-6xl max-xl:text-5xl text-center leading-[64px] font-bold">
        We&rsquo;ve Been in Your Shoes—And <br /> We Know the Way Forward
      </h2>

      <p className=" mt-5 text-foreground font-medium text-xl max-xl:text-lg text-center font-inter leading-8">
        Our team of experts understands what it&rsquo;s like to buy a car as a
        newcomer. <br />
        We&rsquo;ve helped thousands of people just like you:
      </p>

      <div className="relative z-50 mt-12 flex items-center justify-center gap-6 max-xl:gap-4">
        <div className="bg-white h-[450px] w-[318px] p-8 max-xl:px-4 bg-[url(/backgrounds/service-car.webp)] bg-center bg-cover bg-no-repeat border-2 border-card drop-shadow-card rounded-large flex items-end ">
          <div>
            <Image
              src={"/icons/search-normal.svg"}
              width={48}
              height={48}
              alt="Find Reliable Cars at Fair Prices"
              loading="lazy"
            />

            <p className="mt-7 font-lora font-bold text-xl max-xl:text-lg leading-6 max-xl:leading-5 text-foreground">
              Find Reliable Cars at Fair Prices –{" "}
              <span className="block font-normal max-xl:mt-2 ">
                No overpaying, no hidden issues.
              </span>
            </p>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-6 ">
          <SmallService
            icon="/icons/money.svg"
            alt="Secure the Best Auto Loans"
            title="Secure the Best Auto Loans –"
            subTitle="Even with little to no credit history."
            key={1}
          />
          <SmallService
            icon="/icons/security.svg"
            alt="Avoid Costly Mistakes and Scams"
            title="Avoid Costly Mistakes and Scams –"
            subTitle="We know the red flags."
            key={2}
          />
        </div>

        <div className="bg-white h-[450px] w-[318px] p-8 max-xl:px-4 bg-[url(/backgrounds/peace.webp)] bg-center bg-cover bg-no-repeat border-2 border-card drop-shadow-card rounded-large flex items-start ">
          <div>
            <Image
              src={"/icons/process.svg"}
              width={48}
              height={48}
              alt="Find Reliable Cars at Fair Prices"
              loading="lazy"
            />

            <p className="mt-7 font-lora font-bold text-xl max-xl:text-lg leading-6 max-xl:leading-5 text-foreground">
              Navigate the Process with Confidence –{" "}
              <span className="block max-lg:mt-2 font-normal">
                From paper-work to negotiation, we make it easy.
              </span>
            </p>
          </div>
        </div>
      </div>

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-28 -right-0"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-1/2 -translate-y-1/2 -left-20"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute bottom-3  right-20"
      />
    </section>
  );
};

export default ServicesSection;
