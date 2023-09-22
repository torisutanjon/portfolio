// import { useEffect, useState } from "react";
import { useThemeContext } from "../Hooks";
import * as icons from "../assets";
import { useNavigateSection } from "../Hooks";

const Landing = () => {
  const { isDark, setIsDark } = useThemeContext();
  const { setSectionRef, navList, onClick } = useNavigateSection();

  const clipboard = () => {
    navigator.clipboard.writeText("giraotristan@gmail.com");
    window.alert("giraotristan@gmail.com is copied to clipboard");
  };

  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center"
      ref={(el) => setSectionRef("home", el)}
    >
      <div className="absolute top-0 left-0 h-12 w-full">
        <div className="absolute right-12 h-full w-96 flex-row items-center justify-between text-sm hidden lg:flex">
          {navList.map((nav, key) => {
            return (
              <p
                key={key}
                className="cursor-pointer"
                onClick={() => onClick(nav.id)}
              >
                {nav.name}
              </p>
            );
          })}
          <button
            className="h-5 w-5 flex items-center justify-center rounded-full border-[1px] border-lightPrimary"
            onClick={() => setIsDark((prevState) => !prevState)}
          >
            <img
              src={isDark ? icons.lightMode : icons.darkMode}
              alt=""
              className="relative h-full w-full"
            />
          </button>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 h-7 w-7 flex items-center justify-center rounded-full border-[1px] border-lightPrimary lg:hidden"
        onClick={() => setIsDark((prevState) => !prevState)}
      >
        <img
          src={isDark ? icons.lightMode : icons.darkMode}
          alt=""
          className="relative h-full w-full"
        />
      </button>
      <div className="relative flex flex-row items-center justify-center lg:w-3/4 xl:w-1/2">
        <img
          src={icons.profile}
          alt=""
          className="relative h-40 w-40 rounded-full md:h-48 md:w-48 lg:h-64 lg:w-64"
        />
        <a
          href={icons.resume}
          download={"Tristan John Girao Resume"}
          className="absolute right-0 h-10 w-48 items-center justify-center bg-green-700 text-white hidden rounded-md text-sm cursor-pointer lg:flex"
        >
          Download My Resume
        </a>
      </div>

      <p className="text-xl mt-8 md:text-2xl lg:text-3xl">
        I'm Tristan John P. Girao
      </p>
      <div className="w-full flex flex-row items-center justify-center mt-4">
        <a href="https://www.facebook.com/tristanjohn.girao">
          <img
            src={icons.facebook}
            alt=""
            className="relative h-5 w-5 mx-2 lg:h-6 lg:w-6"
          />
        </a>
        <img
          src={icons.gmail}
          alt=""
          className="relative h-5 w-5 mx-2 cursor-pointer lg:h-6 lg:w-6"
          onClick={() => clipboard()}
        />
        <a href="https://github.com/torisutanjon?tab=repositories">
          <img
            src={isDark ? icons.darkGithub : icons.lightGithub}
            alt=""
            className="relative h-5 w-5 mx-2 lg:h-6 lg:w-6"
          />
        </a>
        <a href="https://www.linkedin.com/in/tristan-john-girao-69521a201/">
          <img
            src={icons.linkedin}
            alt=""
            className="relative h-5 w-5 mx-2 lg:h-6 lg:w-6"
          />
        </a>
      </div>
      <p className="mt-4 md:text-lg lg:text-xl">Freelance</p>
      <span>
        {/* <p className="text-[orange]">{text}</p> */}
        <p className="text-[orange] md:text-lg xl:text-xl">Web Developer</p>
      </span>
      <a
        href={icons.resume}
        download={"Tristan John Girao Resume"}
        className="mt-4 h-10 w-10 rounded-md bg-green-700 flex items-center justify-center lg:hidden"
      >
        <img src={icons.download} alt="" className="relative h-6 w-6" />
      </a>
    </section>
  );
};

export default Landing;
