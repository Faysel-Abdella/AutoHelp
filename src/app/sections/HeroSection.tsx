import CTAButton from "../components/CTAButton";
import SmallNote from "../components/SmallNote";

const HeroSection = () => {
  return (
    <section className="pt-12 flex items-center justify-center">
      <div>
        <h2 className="w-fit mx-auto font-inter border-light border-mainBlue rounded-3xl py-3 px-5 ">
          <span className="text-base font-medium">Welcome to America</span>
          <span className="px-px h-full bg-foreground mx-2"></span>
          <span className="font-bold text-base text-mainBlue">
            Let&rsquo;s Get Your First Car!
          </span>
        </h2>

        <h1 className="z-50 mt-6 font-lora font-semibold text-7xl text-center leading-[90px]">
          Let&rsquo;s Get You on the Road <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-mainGray font-bold ">
            Stress-Free!
          </span>
        </h1>

        <h3 className="mt-4 text-foreground font-inter font-medium leading-7 text-center ">
          Your First Car in the U.S. Doesn&rsquo;t Have to Be Complicated.
          Moving to the U.S. <br /> comes with big opportunities—but buying your
          first car shouldn&rsquo;t be <br /> one of your biggest headaches.
        </h3>

        <div className="flex items-center justify-center mt-8">
          <CTAButton label="Contact With Us!" />
        </div>

        <div className="mt-24 flex items-center justify-center gap-24">
          <SmallNote text="We Make It Simple." key={1} />
          <SmallNote text="We Make It Affordable." key={2} />
          <SmallNote text="We Make It Stress-Free." key={3} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
