import Image from "next/image";

interface SmallServiceProps {
  icon: string;
  alt: string;
  title: string;
  subTitle: string;
}

const SmallService = ({ icon, alt, title, subTitle }: SmallServiceProps) => {
  return (
    <div className="bg-white h-[213px] w-[318px] max-xl:w-[250px] p-8 max-xl:p-4  border-2 border-card drop-shadow-card rounded-large ">
      <div>
        <Image src={icon} width={48} height={48} alt={alt} loading="lazy" />

        <p className="mt-7 font-lora font-bold text-xl max-xl:text-lg leading-6 max-xl:leading-6 text-foreground">
          {title} <span className=" font-normal">{subTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default SmallService;
