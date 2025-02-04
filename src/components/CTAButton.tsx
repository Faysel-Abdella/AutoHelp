import { ArrowDownRight } from "lucide-react";

interface CTAButtonProps {
  label: string;
  icon?: any;
}

const CTAButton = ({ label, icon }: CTAButtonProps) => {
  return (
    <button className="p-4 flex items-center justify-center gap-5 bg-mainBlue border-2 border-white rounded-larger drop-shadow-main ">
      <p className="pl-4 text-white font-semibold font-inter text-base leading-5">
        {label}
      </p>
      <div className="bg-background rounded-full scale-125">
        {icon ? icon : <ArrowDownRight className="text-foreground" />}
      </div>
    </button>
  );
};

export default CTAButton;
