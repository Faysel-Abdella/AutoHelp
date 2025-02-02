const HeroSection = () => {
  return (
    <section className="pt-12 flex items-center justify-center">
      <div>
        <h2 className="w-fit mx-auto font-[family-name:var(--font-inter-sans)] border-light border-mainBlue rounded-3xl py-3 px-5 ">
          <span className="text-base font-medium">Welcome to America</span>
          <span className="px-px h-full bg-foreground mx-2"></span>
          <span className="font-bold text-base text-mainBlue">
            Let&rsquo;s Get Your First Car!
          </span>
        </h2>

        <h1 className="z-50 mt-6 font-[family-name:var(--font-lora-sans)] font-semibold text-7xl text-center leading-[90px]">
          Let&rsquo;s Get You on the Road <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-mainGray font-bold ">
            Stress-Free!
          </span>
        </h1>

        <h3 className="mt-4 text-foreground font-[family-name:var(--font-inter-sans)] font-medium leading-7 text-center ">
          Your First Car in the U.S. Doesn&rsquo;t Have to Be Complicated.
          Moving to the U.S. <br /> comes with big opportunities—but buying your
          first car shouldn&rsquo;t be <br /> one of your biggest headaches.
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
