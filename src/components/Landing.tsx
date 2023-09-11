// import { useEffect, useState } from "react";
import { useThemeContext } from "../Hooks";
import {
  profile,
  facebook,
  gmail,
  lightGithub,
  darkGithub,
  lightX,
  darkX,
  linkedin,
  lightMode,
  darkMode,
} from "../assets";

const Landing = () => {
  const { isDark, setIsDark } = useThemeContext();
  // const [text, setText] = useState("");
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const textToDisplay = "Web Developer";
  //   if (index < textToDisplay.length) {
  //     const timeOut = setTimeout(() => {
  //       setText((prevText) => prevText + textToDisplay.charAt(index));
  //       setIndex((prevIndex) => prevIndex + 1);
  //     }, 200);
  //     return () => clearTimeout(timeOut);
  //   } else {
  //     const timeOut = setTimeout(() => {
  //       setText((prevText) => prevText.substring(0, prevText.length - 1));
  //     }, 200);
  //     return () => clearTimeout(timeOut);
  //   }
  // }, [text, index]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <button
        className="absolute top-4 right-4 h-7 w-7 flex items-center justify-center rounded-full border-[1px] border-lightPrimary lg:hidden"
        onClick={() => setIsDark((prevState) => !prevState)}
      >
        <img
          src={isDark ? lightMode : darkMode}
          alt=""
          className="relative h-full w-full"
        />
      </button>
      <img
        src={profile}
        alt=""
        className="relative h-40 w-40 rounded-full md:h-48 md:w-48"
      />
      <p className="text-xl mt-8 md:text-2xl">I'm Tristan John P. Girao</p>
      <div className="w-full flex flex-row items-center justify-center mt-4">
        <a href="">
          <img src={facebook} alt="" className="relative h-5 w-5 mx-2" />
        </a>
        <a href="">
          <img src={gmail} alt="" className="relative h-5 w-5 mx-2" />
        </a>
        <a href="">
          <img
            src={isDark ? darkGithub : lightGithub}
            alt=""
            className="relative h-5 w-5 mx-2"
          />
        </a>
        <a href="">
          <img
            src={isDark ? darkX : lightX}
            alt=""
            className="relative h-5 w-5 mx-2"
          />
        </a>
        <a href="">
          <img src={linkedin} alt="" className="relative h-5 w-5 mx-2" />
        </a>
      </div>
      <p className="mt-4 md:text-lg">Freelance</p>
      <span>
        {/* <p className="text-[orange]">{text}</p> */}
        <p className="text-[orange] md:text-lg">Web Developer</p>
      </span>
    </div>
  );
};

export default Landing;
