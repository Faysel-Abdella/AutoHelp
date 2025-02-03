"use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import SectionHeader from "../components/SectionHeader";

const Testimonials = () => {
  return (
    <section className="relative bg-[url(/backgrounds/bg-dots-many.webp)] bg-center bg-no-repeat bg-cover py-3 pt-20">
      <div className="flex items-center justify-center">
        <SectionHeader title="Testimonials" />
      </div>
      <div className="-z-10 absolute top-0 left-0 h-full w-full bg-foreground" />

      <div className="z-40">
        <div>
          <h2 className="mt-10 text-white font-lora text-6xl text-center leading-[64px] font-bold">
            Hear From Other Newcomers <br /> Like You
          </h2>
        </div>
        {/* 
        <article className={"relative mt-24 max-md:mt-20 max-sm:mt-8 px-7"}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className={" w-full mx-auto max-w-[1200px]"}
          >
            <CarouselContent>
              {dummyTestimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className={"sm:basis-1/2 md:basis-1/2 lg:basis-1/3"}
                >
                  <div>
                    <Testimonial
                      key={testimonial.id}
                      testimonial={testimonial.description}
                      profile={testimonial.profile}
                      name={testimonial.name}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext
              className={
                "absolute -right-5  size-10 rounded-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90 text-white z-10"
              }
            />
            <CarouselPrevious
              className={
                "max-lg:hidden absolute -left-5  size-10 rounded-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90 text-white z-10"
              }
            />
          </Carousel>
        </article> */}
      </div>
    </section>
  );
};

export default Testimonials;
