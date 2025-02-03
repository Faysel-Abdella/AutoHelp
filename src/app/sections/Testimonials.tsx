import SectionHeader from "../components/SectionHeader";

const Testimonials = () => {
  return (
    <section className="bg-foreground py-3 pt-20">
      <div className="flex items-center justify-center">
        <SectionHeader title="Testimonials" />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dots-many.webp)] bg-center bg-no-repeat bg-cover" />

        <div className="z-10">
          <h2 className="mt-10 text-white font-lora text-6xl text-center leading-[64px] font-bold">
            Hear From Other Newcomers <br /> Like You
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
