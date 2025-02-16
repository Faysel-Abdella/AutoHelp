import CTAButton from "@/components/CTAButton";

const CarPreview = () => {
  return (
    <section className="bg-[url(/backgrounds/car-preview.webp)] bg-center bg-no-repeat bg-cover py-12 px-4">
      <h1 className="font-bold font-lora text-5xl max-md:text-4xl text-center text-background leading-[64px]">
        Don&rsquo;t Overpay. Don&rsquo;t Get Scammed. <br /> Don&rsquo;t Stress.
      </h1>

      <p className="mt-5 font-inter font-medium italic text-lg leading-7 text-center text-background ">
        Your American journey starts with <br className="md:hidden" /> the right
        <br /> <span className="font-bold">car</span>—let&rsquo;s get it done
        right.
      </p>

      <p className="mt-[460px] text-foreground font-lora font-bold text-3xl max-md:text-xl text-center leading-10">
        🚀 Get expert guidance for free. No risk, <br />
        <br /> no stress, just results.
      </p>

      <div className="mt-14 flex items-center justify-center">
        <CTAButton label="Contact Us" />
      </div>
    </section>
  );
};

export default CarPreview;
