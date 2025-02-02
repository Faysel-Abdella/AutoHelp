import React from "react";

interface StatisticsProps {
  title: string;
  description: string;
}

const Statistics = ({ title, description }: StatisticsProps) => {
  return (
    <div className="w-64 bg-white/10  border border-secondary drop-shadow-dataCard rounded-2xl p-5">
      <h2 className="text-white font-lora font-bold text-[32px] leading-10">
        {title}
      </h2>
      <p className="mt-5 font-normal text-base leading-6 text-white/75">
        {description}
      </p>
    </div>
  );
};

export default Statistics;
