import { cn } from "@/lib/util";

interface StepProps {
  icon: string;
  alt: string;
  step: number;
  title: string;
  description: string;
}

const Step = ({ icon, alt, step, title, description }: StepProps) => {
  return (
    <div
      className={cn(
        step === 2
          ? "border-light border-card drop-shadow-step bg-white/75"
          : ""
      )}
    ></div>
  );
};

export default Step;
