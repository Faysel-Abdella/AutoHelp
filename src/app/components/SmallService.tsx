import React from "react";
import Image from "next/image";

interface SmallServiceProps {
  icon: string;
  alt: string;
  title: string;
  subTitle: string;
}

const SmallService = ({ icon, alt, title, subTitle }: SmallServiceProps) => {
  return (
    <div className="bg-white h-[213px] w-[318px] p-8  border-2 border-card drop-shadow-card rounded-large ">
      <div>
        <Image src={icon} width={48} height={48} alt={alt} loading="lazy" />

        <h4 className="mt-7 font-lora font-bold text-xl leading-6 text-foreground">
          {title} <span className="font-normal">{subTitle}</span>
        </h4>
      </div>
    </div>
  );
};

export default SmallService;
