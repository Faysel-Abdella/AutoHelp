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
  return <section className="border "></section>;
};

export default Testimonial;
