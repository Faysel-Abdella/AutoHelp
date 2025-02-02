import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className=" bg-lavenderLight px-8 py-4 max-md:px-4 max-md:py-2 drop-shadow-main rounded-large max-md:rounded-3xl">
      <span className="text-mainBlue font-bold font-inter text-lg max-md:text-sm leading-4">
        {title}
      </span>
    </div>
  );
};

export default SectionHeader;
