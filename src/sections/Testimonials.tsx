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
import CTAButton from "@/components/CTAButton";

const Testimonials = () => {
  return (
    <section className="py-3 pb-14 pt-20 px-4 bg-foreground" id="testimonial">
      <div className="flex items-center justify-center">
        <SectionHeader title="Testimonials" />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dots-many.webp)] bg-center bg-no-repeat bg-cover z-0" />

        <div className="relative z-10">
          <div>
            <h2 className="mt-10 text-white font-lora text-6xl max-xl:text-5xl max-md:text-4xl text-center leading-[64px] font-bold">
              Hear From Other Newcomers <br /> Like You
            </h2>
          </div>

          <article className={"relative mt-24 max-md:mt-20 max-sm:mt-8 mx-4"}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
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
                  "absolute -left-5  size-10 rounded-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90 text-white z-10"
                }
              />
            </Carousel>
          </article>

          <h2 className="mt-14 font-lora font-bold text-[40px] max-lg:text-4xl max-md:text-3xl text-center text-background">
            You deserve a stress-free car buying experience too. <br />{" "}
            <span className="max-lg:block max-lg:mt-6">
              Let&rsquo;s make it happen!
            </span>
          </h2>

          <div className="mt-10 flex items-center justify-center">
            <CTAButton label="Book Your Free Call Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
