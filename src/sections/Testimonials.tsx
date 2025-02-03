"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionHeader from "@/components/SectionHeader";

import testimonials from "@/data/testimonials";
import Testimonial from "@/components/Testimonial";

const Testimonials = () => {
  return (
    <section className="py-3 pt-20 bg-foreground">
      <div className="flex items-center justify-center">
        <SectionHeader title="Testimonials" />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dots-many.webp)] bg-center bg-no-repeat bg-cover z-0" />

        <div className="relative z-10">
          <div>
            <h2 className="mt-10 text-white font-lora text-6xl text-center leading-[64px] font-bold">
              Hear From Other Newcomers <br /> Like You
            </h2>
          </div>

          <article className={"relative mt-24 max-md:mt-20 max-sm:mt-8"}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className={" w-full mx-auto max-w-[1200px]"}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className={"sm:basis-1/2 md:basis-1/2 lg:basis-1/3"}
                  >
                    <div>
                      <Testimonial
                        key={testimonial.id}
                        name={testimonial.name}
                        profilePath={testimonial.profilePath}
                        position={testimonial.position}
                        text={testimonial.text}
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
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
