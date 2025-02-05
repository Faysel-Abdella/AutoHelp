const Footer = () => {
  return (
    <footer className="pt-7 pb-16  px-4 w-full  bg-secondaryBackground flex items-center justify-center">
      <div className="w-full pb-8   bg-footer mx-11 border border-card rounded-larger">
        <div className="flex max-md:flex-col items-center justify-between max-lg:justify-center max-lg:gap-10 pt-32 max-md:pt-16 pb-24 max-lg:pb-16 px-28 ">
          <p className="font-lora font-semibold text-2xl text-background text-nowrap">
            AutoHelp USA
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2 font-inter text-background">
            <li className="pt-2 px-4 text-base max-lg:text-sm text-nowrap text-center">
              Services
            </li>
            <li className="pt-2 px-4 text-base max-lg:text-sm text-nowrap text-center">
              Why Us
            </li>
            <li className="pt-2 px-4 text-base max-lg:text-sm text-nowrap text-center">
              How it works
            </li>
            <li className="pt-2 px-4 text-base max-lg:text-sm text-nowrap text-center">
              Testimonials
            </li>
          </ul>
        </div>

        <p className="text-center font-inter text-balance font-light text-white/90 max-md:text-sm">
          © AutoHelp USA, all rights reserved 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
