import { Project } from "./Project";
import * as icons from "../assets";
import { useThemeContext } from "../Hooks";

const Projects = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <p className="relative text-2xl font-bold mt-24 md:text-3xl">
        What have I <span className="text-orange">done</span> ?
      </p>
      <Project
        index={0}
        image={icons.chatApp}
        repo="https://github.com/torisutanjon/chat-app"
        title="Chat Application"
        description="A chat application utilizing capability of Socket.io to make a  make bi-directional communication between a client and the server."
        techs={[
          isDark ? icons.darkNext : icons.lightNext,
          icons.expressJS,
          icons.nodejs,
          icons.mongodb,
          icons.typescript,
          icons.tailwind,
        ]}
      />
      <Project
        index={1}
        image={icons.todoApp}
        repo="https://github.com/torisutanjon/todo-app-t3"
        demo="https://tristanjohngirao-todoappt3.vercel.app/"
        title="Todo Application"
        description="Project created to learn the newly released T3 Stack."
        techs={[
          isDark ? icons.darkNext : icons.lightNext,
          icons.t3Stack,
          icons.mongodb,
          icons.typescript,
          icons.tailwind,
        ]}
      />
      <Project
        index={2}
        image={icons.tesla}
        repo="https://github.com/torisutanjon/tesla-website-clone"
        demo="https://tristanjohngirao-teslawebsiteclone.netlify.app/"
        title="Tesla Website Clone"
        description="Trying to clone the Tesla Website."
        techs={[icons.vite, icons.typescript, icons.tailwind]}
      />
      <Project
        index={3}
        image={icons.spacex}
        repo="https://github.com/torisutanjon/spacex_website_clone"
        demo="https://tristanjohngirao-spacexwebsiteclone.vercel.app/"
        title="SpaceX Website Clone"
        description="Trying to clone the Spacex Website."
        techs={[icons.vite, icons.typescript, icons.tailwind]}
      />
      <Project
        index={4}
        image={icons.starlink}
        repo="https://github.com/torisutanjon/starlink-website-clone"
        demo="https://tristanjohngirao-starlinkwebsiteclone.vercel.app/"
        title="Starlink Website Clone"
        description="Trying to clone the Starlink Website."
        techs={[icons.vite, icons.typescript, icons.tailwind]}
      />
    </div>
  );
};

export default Projects;
