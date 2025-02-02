interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className=" bg-[#EDF1E4] px-8 py-4 max-md:px-4 max-md:py-2 drop-shadow-main rounded-large max-md:rounded-3xl">
      <span className="text-[#10009F] font-bold font-inter text-lg max-md:text-sm leading-4">
        {title}
      </span>
    </h2>
  );
};

export default SectionHeader;
