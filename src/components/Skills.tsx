import * as icons from "../assets";
import { useThemeContext } from "../Hooks";

const Skills = () => {
  const { isDark } = useThemeContext();

  const technologies = [
    { image: icons.html5, title: "HTML 5" },
    { image: icons.css3, title: "CSS 3" },
    { image: icons.javascript, title: "JavaScript" },
    { image: icons.typescript, title: "TypeScript" },
    { image: icons.react, title: "React" },
    { image: isDark ? icons.darkNext : icons.lightNext, title: "Next JS" },
    { image: icons.nodejs, title: "Node JS" },
    { image: icons.mongodb, title: "MongoDB" },
    { image: icons.expressJS, title: "Express JS" },
    { image: icons.t3Stack, title: "T3 Stack" },
    { image: icons.tailwind, title: "Tailwind CSS" },
    { image: icons.vite, title: "Vite" },
    { image: icons.git, title: "Git" },
    { image: isDark ? icons.darkGithub : icons.lightGithub, title: "GitHub" },
    { image: icons.figma, title: "Figma" },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      <p className="text-2xl font-bold mt-24 md:text-3xl">
        What do I <span className="text-orange">know</span> ?
      </p>
      <p className="mt-8 md:text-lg">I use these on my projects:</p>
      <div className="w-4/6 grid grid-cols-4 mt-4 md:mt-12 md:grid-cols-5">
        {technologies.map((tech, key) => {
          return (
            <div
              className="relative h-full w-full flex flex-col items-center justify-center my-2 md:my-4"
              key={key}
            >
              <img
                src={tech.image}
                alt=""
                className="relative h-6 w-6 md:h-12 md:w-12"
              />
              <p className="mt-2 hidden text-sm md:block">{tech.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
