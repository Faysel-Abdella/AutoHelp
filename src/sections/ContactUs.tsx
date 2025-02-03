import { Send } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="relative py-32 bg-secondaryBackground flex items-center justify-center">
      <div>
        <h1 className="font-lora font-bold text-5xl text-center leading-[64px] text-foreground">
          Claim Your Free Guide & <br /> Consultation
        </h1>

        <div className="font-inter mt-12">
          <p className="font-bold text-2xl text-foreground text-center">
            Join 500+ Newcomers
          </p>
          <p className="mt-4 font-medium text-xl text-foreground text-center">
            {" "}
            who saved <span className="font-bold">$2,800</span> on average!
          </p>
        </div>

        <form className="mt-12 font-inter flex items-start justify-center gap-8">
          <div className="flex flex-col gap-6">
            <input
              placeholder="Your name*"
              className="placeholder:font-inter rounded-large py-4 px-6 outline-none bg-input "
            />
            <input
              placeholder="Email*"
              className="placeholder:font-inter rounded-large py-4 px-6 outline-none bg-input "
            />
            <input
              placeholder="Phone*"
              className="placeholder:font-inter rounded-large py-4 px-6 outline-none bg-input "
            />
          </div>
          <div className="flex flex-col gap-6">
            <input
              placeholder="Country of Origin*"
              className="placeholder:font-inter rounded-large py-4 px-6 outline-none bg-input "
            />
            <input
              placeholder="Car Budget Range.*"
              className="placeholder:font-inter rounded-large py-4 px-6 outline-none bg-input "
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-3 font-semibold text-lg py-4 px-6 bg-mainBlue rounded-large text-background"
            >
              <p>Send</p> <Send />
            </button>
          </div>
        </form>
      </div>

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-28 -right-0"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-1/2 -translate-y-1/2 -left-20"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute bottom-3  right-20"
      />
    </section>
  );
};

export default ContactUs;
