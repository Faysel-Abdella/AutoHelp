import Image from "next/image";

import { MoveRight } from "lucide-react";

import bonuses from "../data/bonuses";

const Bonus = () => {
  return (
    <section className="p-10 border border-mainBlue rounded-large drop-shadow-bonus bg-[#3e3333]">
      <h2 className="text-white font-lora font-semibold text-2xl leading-8">
        🎁 BONUS:
      </h2>
      <h2 className="mt-4 font-lora font-bold text-[32px] text-white leading-[48px]">
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
        <p className="font-inter font-medium text-lg leading-8 text-white underline underline-offset-2">
          Book Your Free Consultation
        </p>
        <MoveRight className="text-white" />
      </div>
    </section>
  );
};

export default Bonus;
