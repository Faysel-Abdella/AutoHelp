import Image from "next/image";

import { MoveRight } from "lucide-react";

import bonuses from "../data/bonuses";
import CTAButton from "./CTAButton";

const Bonus = () => {
  return (
    <section className="p-10 max-lg:w-4/5 max-md:w-full max-lg:mx-auto border border-mainBlue rounded-large drop-shadow-bonus bg-[#3e3333]">
      <h2 className="text-white font-lora font-semibold text-2xl leading-8">
        🎁 BONUS:
      </h2>
      <h2 className="mt-4 font-lora font-bold text-2xl max-md:text-xl text-white leading-[48px]">
        Your Newcomer Advantage <br /> Package
      </h2>
      <ul className="mt-10 space-y-4">
        {bonuses.map(({ id, title }) => (
          <li key={id} className="flex items-center gap-3">
            <Image
              src={"/icons/tick-circle.svg"}
              alt="Bonuses from AutoHelpUSA"
              width={24}
              height={24}
            />
            <span className="font-inter font-medium text-lg text-white leading-8">
              {title}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex items-center  gap-1 cursor-pointer hover:scale-105 transition-all ease-in">
        <CTAButton
          label="Book Your Free Consultation"
          icon={<MoveRight className="text-foreground  p-px" />}
          style="text-sm"
        />
      </div>
    </section>
  );
};

export default Bonus;
