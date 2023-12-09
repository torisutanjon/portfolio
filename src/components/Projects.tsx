import { Project } from "./Project";
import * as icons from "../assets";
import { useThemeContext, useNavigateSection } from "../Hooks";

const Projects = () => {
  const { isDark } = useThemeContext();
  const { setSectionRef } = useNavigateSection();
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center"
      ref={(el) => setSectionRef("projects", el)}
    >
      <p className="relative text-2xl font-bold mt-24 md:text-3xl lg:mt-48 lg:text-4xl">
        What I have <span className="text-orange">done</span> ?
      </p>
      <Project
        index={0}
        image={icons.chatApp}
        repo="https://github.com/torisutanjon/updated-chat-app"
        title="Chat Application"
        description="A chat application created using T3 stack. Utilizing the capability of the Socket.io to make a bi-directional communication between a client and a server."
        techs={[
          icons.t3Stack,
          icons.expressJS,
          icons.nodejs,
          icons.mongodb,
          icons.typescript,
          icons.tailwind,
        ]}
      />
      <Project
        index={1}
        image={icons.tesla}
        repo="https://github.com/torisutanjon/tesla-website-clone"
        demo="https://tristanjohngirao-teslawebsiteclone.netlify.app/"
        title="Tesla Website Clone"
        description="Tesla website homepage front-end clone."
        techs={[icons.vite, icons.react, icons.typescript, icons.tailwind]}
      />
      <Project
        index={2}
        image={icons.spacex}
        repo="https://github.com/torisutanjon/spacex_website_clone"
        demo="https://tristanjohngirao-spacexwebsiteclone.vercel.app/"
        title="SpaceX Website Clone"
        description="Tesla website homepage front-end clone."
        techs={[icons.vite, icons.react, icons.typescript, icons.tailwind]}
      />
      <Project
        index={3}
        image={icons.starlink}
        repo="https://github.com/torisutanjon/starlink-website-clone"
        demo="https://tristanjohngirao-starlinkwebsiteclone.vercel.app/"
        title="Starlink Website Clone"
        description="Starlink website homepage front-end clone."
        techs={[icons.vite, icons.react, icons.typescript, icons.tailwind]}
      />
      <Project
        index={4}
        image={icons.todoApp}
        repo="https://github.com/torisutanjon/todo-app-t3"
        demo="https://tristanjohngirao-todoappt3.vercel.app/"
        title="Todo Application"
        description="An online todo-app project created using T3 stack."
        techs={[
          isDark ? icons.darkNext : icons.lightNext,
          icons.t3Stack,
          icons.mongodb,
          icons.typescript,
          icons.tailwind,
        ]}
      />
    </section>
  );
};

export default Projects;
