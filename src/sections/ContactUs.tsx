import { Send } from "lucide-react";
import Image from "next/image";
import USstates from "@/data/us-states";

const ContactUs = () => {
  return (
    <section className="relative py-32 bg-secondaryBackground flex items-center justify-center">
      <main className="relative z-40 flex flex-wrap items-start justify-center gap-10 bg-white rounded-large p-10">
        <section className="bg-blueGr p-8 py-20 max-sm:py-10 max-sm:px-8">
          <h1 className="font-lora font-bold text-4xl text-center leading-[52px] text-foreground">
            Claim Your Free Guide & <br /> Consultation
          </h1>

          <div className="font-inter mt-6">
            <p className="font-bold text-2xl text-foreground text-center">
              Join 1000+ Newcomers
            </p>
            <p className="mt-4 font-medium text-xl text-foreground text-center">
              {" "}
              who saved <span className="font-bold">$4,200</span> on average!
            </p>
          </div>
        </section>

        <section className="flex  flex-col gap-6">
          <div className="flex max-md:flex-col justify-center items-center gap-12 max-[890px]:gap-[24px]">
            <input
              placeholder="First Name*"
              className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
              required
            />
            <input
              placeholder="Last Name*"
              className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
              required
            />
          </div>
          <div className="flex flex-wrap  items-center justify-center  gap-12 max-[890px]:gap-[24px]">
            <input
              placeholder="Email*"
              className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
              required
            />
            <input
              placeholder="Phone (optional)"
              className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
            />
          </div>

          <div className="flex max-md:flex-col justify-center items-center gap-12 max-[890px]:gap-[24px]">
            <input
              placeholder="Preferred language (optional)"
              className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
            />
            <select
              className="rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg"
              required
            >
              <option disabled selected>
                Choose a state*
              </option>
              {USstates.map(({ id, label, value }) => (
                <option key={id} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
            <button className="bg-primaryBlue text-primaryWhite rounded-none py-4 px-[67px] font-roboto font-bold text-[24px] leading-[28px] text-center max-md:w-full">
              Send
            </button>
          </div>
        </section>
      </main>

      {/* <div>
        <h1 className="font-lora font-bold text-5xl text-center leading-[64px] text-foreground">
          Claim Your Free Guide & <br /> Consultation
        </h1>

        <div className="font-inter mt-12">
          <p className="font-bold text-2xl text-foreground text-center">
            Join 1000+ Newcomers
          </p>
          <p className="mt-4 font-medium text-xl text-foreground text-center">
            {" "}
            who saved <span className="font-bold">$4,200</span> on average!
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
      </div> */}

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
