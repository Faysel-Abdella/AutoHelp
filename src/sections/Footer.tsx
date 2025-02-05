const Footer = () => {
  return (
    <footer className="pt-7 pb-16 w-full  bg-secondaryBackground flex items-center justify-center">
      <div className="w-full pb-8  bg-footer mx-11 border border-card rounded-larger">
        <div className="flex items-center justify-between pt-32 pb-24 px-28">
          <p className="font-lora font-semibold text-2xl text-background">
            AutoHelp USA
          </p>
          <ul className="flex items-center justify-center gap-2 font-inter text-background">
            <li className="pt-2 px-4 text-base text-center">Services</li>
            <li className="pt-2 px-4 text-base text-center">Why Us</li>
            <li className="pt-2 px-4 text-base text-center">How it works</li>
            <li className="pt-2 px-4 text-base text-center">Testimonials</li>
          </ul>
        </div>

        <p className="text-center font-inter text-balance font-light text-white/90">
          © AutoHelp USA, all rights reserved 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
