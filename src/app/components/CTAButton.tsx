import { ArrowDownRight } from "lucide-react";
import React from "react";

interface CTAButtonProps {
  label: string;
}

const CTAButton = ({ label }: CTAButtonProps) => {
  return (
    <button className="p-4 flex items-center justify-center gap-5 bg-mainBlue border-2 border-white rounded-larger drop-shadow-main ">
      <p className="pl-4 text-white font-semibold font-inter text-base leading-5">
        {label}
      </p>
      <div className="bg-background rounded-full scale-125">
        <ArrowDownRight className="text-foreground" />
      </div>
    </button>
  );
};

export default CTAButton;
