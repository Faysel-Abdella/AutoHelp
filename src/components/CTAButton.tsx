import { cn } from "@/lib/util";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  label: string;
  icon?: any;
  style?: string;
}

const CTAButton = ({ label, icon, style }: CTAButtonProps) => {
  return (
    <button>
      <Link
        href="#contact-us"
        className="w-full h-full p-4 flex items-center justify-center gap-5 bg-mainBlue border-2 border-white rounded-larger drop-shadow-main"
      >
        <p
          className={cn(
            "pl-4 text-white font-semibold font-inter text-base leading-5",
            style
          )}
        >
          {label}
        </p>
        <div className="bg-background rounded-full scale-125">
          {icon ? icon : <ArrowDownRight className="text-foreground" />}
        </div>
      </Link>
    </button>
  );
};

export default CTAButton;
