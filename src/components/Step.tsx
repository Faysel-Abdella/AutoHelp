import { cn } from "@/lib/util";
import Image, { ImageProps } from "next/image";
import React, { ReactElement } from "react";

interface StepProps {
  icon: string;
  alt: string;
  step: number;
  stepImage: ReactElement<ImageProps>;
  title: string;
  description: string;
}

const Step = ({
  icon,
  alt,
  step,
  stepImage,
  title,
  description,
}: StepProps) => {
  return (
    <section
      className={cn(
        step === 2
          ? "w-[330px] max-lg:w-3/4 px-8 pb-7 border-light border-card drop-shadow-step bg-white/75 rounded-large"
          : "w-[277px] max-lg:w-3/4"
      )}
    >
      <div
        className={cn(
          "flex",
          step === 2
            ? "items-center max-lg:justify-between gap-24"
            : "items-start max-lg:justify-between gap-40"
        )}
      >
        <Image src={icon} alt={alt} width={54} height={54} />
        {/* <p
          className={cn(
            "text-transparent bg-clip-text bg-gradient-to-b from-foreground to-mainGray font-extrabold",
            step === 2 ? "text-9xl" : "text-5xl"
          )}
        >
          {step}
        </p> */}

        {stepImage}
      </div>

      <div>
        <h1 className="font-lora font-bold text-2xl text-foreground">
          {title}
        </h1>
        <h2 className="mt-5 font-inter font-medium text-lg text-foreground leading-7">
          {description}
        </h2>
      </div>
    </section>
  );
};

export default Step;
