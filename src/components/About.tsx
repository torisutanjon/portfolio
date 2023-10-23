import { useNavigateSection } from "../Hooks";

const About = () => {
  const { setSectionRef } = useNavigateSection();

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center"
      ref={(el) => setSectionRef("about", el)}
    >
      <p className="text-2xl font-bold mt-24 md:text-3xl lg:text-4xl lg:mt-12">
        Who <span className="text-orange">I</span> am ?
      </p>
      <p className="mt-12 mx-12 text-center leading-loose mb-4 md:mx-48 md:text-lg lg:mx-96">
        A self taught web developer and graduated with a degree in Bachelor’s of
        Science in Computer Science. Engaged in freelancing for almost a year by
        now and have done various full stack web application projects.
      </p>
    </section>
  );
};

export default About;
