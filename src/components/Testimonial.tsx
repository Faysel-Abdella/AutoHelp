import Image from "next/image";

interface TestimonialProps {
  name: string;
  position?: string;
  profilePath: string;
  text: string;
}

const Testimonial = ({
  name,
  position,
  profilePath,
  text,
}: TestimonialProps) => {
  return (
    <section className="min-h-52 border border-testimonial drop-shadow-testimonial p-5 rounded-3xl bg-[#403535] select-none">
      <div className="flex justify-center">
        <div className="rounded-t-larger bg-gradient-to-b from-black to-transparent  ">
          <Image
            src={profilePath}
            alt="Testimonial from AutoHelp customers"
            width={50}
            height={50}
            className="min-h-12 min-w-12 rounded-full object-center object-cover"
          />
        </div>

        <div className="pl-3 font-inter border-l border-dashed ml-3">
          <h3 className="text-2xl text-background leading-7">{name}</h3>
          <p className="mt-1 text-base leading-4 text-white/75">{position}</p>
          <blockquote>
            <p className="mt-6 italic text-base leading-6 text-background">
              {text}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
