//dependencies
import React from "react";
import { useMediaQuery } from "react-responsive";

//hooks
import { reveal, revealX, moveR, moveL } from "../Hook/FadeIn";

//assets
import grad_pic from "../assets/grad-pp.jpg";
import sti_icon from "../assets/sti-icon.png";
import isatu_icon from "../assets/isatu-icon.png";
import ecommerce_icon from "../assets/e-commerce-icon.png";
import nft_ecommerce_icon from "../assets/nft-ecommerce.png";
import exchange_rate_icon from "../assets/foreignexchange.png";
import linked_in_icon from "../assets/linked-in-icon.png";
import github_icon from "../assets/github-icon.png";
import fb_icon from "../assets/fb-icon.png";
import twitter_icon from "../assets/twitter-icon.png";

export const LandingPage = () => {
  reveal();
  revealX();
  moveR();
  moveL();

  const isMediumScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  return (
    <div className="absolute top-0 left-0 h-[100%] w-screen">
      {isMediumScreen ? (
        <section className="fixed h-screen w-full hero_section flex flex-col items-center justify-center">
          <div className="relative h-[125px] w-full bg-[#d9d9d959] flex items-center justify-center">
            <p className="text-[62px] text-[#454545]">Hi I'm Tristan</p>
          </div>
          <div className="absolute h-[500px] w-[350px] bg-[#d9d9d9]/50 right-[5%] flex flex-col items-center justify-center">
            <div className="relative h-[50px] w-full bg-[#303030a6] flex items-center justify-center">
              <p className="text-[18px] text-white/50">Quick Info About Me</p>
            </div>
            <div className="relative h-[450px] w-[80%] flex items-center justify-center">
              <p className="text-[#000000a6] text-justify leading-9">
                I am a fresh computer science graduate student and an aspiring
                web developer. Been doing web development for not less than 3
                years now. A bit of an introvert but can do a conversation.
                Especially if it is deep talks about almost anything that could
                piqued my interest.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="fixed h-[400px] w-full hero_section flex items-center justify-center sm:h-screen">
            <div className="relative h-[65px] w-full bg-[#d9d9d959] flex items-center justify-center">
              <p className="text-[24px] text-[#ffffff80]">Hi I'm Tristan</p>
            </div>
          </section>
          <section className="relative bg-white h-[400px] mt-[400px] w-full flex flex-col items-center justify-evenly">
            <div className="relative h-[50px] w-full bg-[#303030a6] flex items-center justify-center">
              <p className="text-[#ffffffbf] text-[18px]">
                Quick Info About Me
              </p>
            </div>
            <div className="relative h-[300px] w-[80%]">
              <p className="text-[#000000a6] text-justify leading-9">
                I am a fresh computer science graduate student and an aspiring
                web developer. Been doing web development for not less than 3
                years now. A bit of an introvert but can do a conversation.
                Especially if it is deep talks about almost anything that could
                piqued my interest.
              </p>
            </div>
          </section>
        </>
      )}

      <section className="relative h-[400px] w-full bg-white sm:mt-[50%]">
        <div className="relative h-full w-full flex flex-col items-center justify-start reveal">
          <div className="relative h-[5px] w-[90%] bg-black/50 shadowBox sm:w-[20%] sm:mt-[50px]"></div>
          <p className="text-[18px] text-black/75 mt-[20px] sm:text-[26px]">
            My Programming Career History
          </p>
          <div className="relative h-[5px] w-[90%] bg-black/50 shadowBox mt-[20px] sm:w-[20%]"></div>
          <p className="text-center  text-[14px] px-[30px] leading-9 text-black/50 mt-[15px] sm:text-[20px] sm:px-[10%] sm:mt-[75px]">
            My programming career starts very long ago, since I was in senior
            high school, pursuing it further in the tertiary. And up till now
            engaging myself on self-learning to improve my knowledge and skills
            more in this field.
          </p>
        </div>
      </section>
      <section className="relative h-[600px] w-full bg-white sm:h-[300px] sm:flex sm:items-center sm:justify-center">
        <div className="relative h-full w-full flex flex-col items-center justify-start reveal sm:flex-row sm:w-[80%]">
          <img
            src={sti_icon}
            alt=""
            className="relative h-[150px] w-[85%] sm:w-[300px]"
          />
          <p className="text-center px-[30px] text-[14px] text-black/50 leading-9 mt-[40px] sm:leading-7">
            I started my programming career when I was in my senior high school.
            I took an Information Communication Technology track major in Mobile
            App and Web Development at STI College of Iloilo for 2 years. That
            is where I was introduced to the world of reading and writing codes,
            and what programming was all about. I graduated my senior high
            school in 2018 acquiring one of the “Programmer of the Year” awardee
            during graduation.
          </p>
        </div>
      </section>
      <section className="relative h-[750px] w-full bg-white sm:h-[300px] sm:flex sm:items-center sm:justify-center">
        <div className="relative h-full w-full flex flex-col items-center justify-start reveal sm:flex-row sm:w-[80%]">
          <img
            src={isatu_icon}
            alt=""
            className="relative h-[150px] w-[85%] sm:w-[300px]"
          />
          <p className="text-center px-[30px] text-[14px] text-black/50 leading-8 mt-[40px] sm:leading-7">
            I continued my programming career in tertiary taking Bachelor of
            Science in Computer Science Major in Advance Programming for 4 years
            in Iloilo Science and Technology University. I was introduced to the
            deep level knowledge of programming, that it is not just writing
            codes anymore but how to write the most efficient algorithm for the
            certain problems. It was a hellish yet really fun and memorable part
            of my life. Even the pandemic strike I was still able to graduate
            with my mental health still intact. During my stay there I was able
            to achieve Dean’s Lister twice and an Academic Merit Awardee during
            graduation.
          </p>
        </div>
      </section>
      <section className="relative h-[800px] w-full bg-white flex flex-col items-center justify-start sm:mx-auto sm:px-[15%]">
        <img
          src={grad_pic}
          alt=""
          className="relative h-[350px] w-[80%] bg-gray-500 mt-[100px] sm:w-[300px] sm:h-[400px]"
        />
        <p className="px-[30px] text-black/50 text-[14px] leading-9 mt-[40px] sm:text-[16px]">
          After graduation, I engaged myself in self-learning to further improve
          my knowledge and skills in programming. After graduation, I engaged
          myself on doing free-lancing commissions to put my skills and
          knowledge into practice as well as getting myself an experience of how
          to work under the pressure of deadline.
        </p>
      </section>
      <section className="relative h-[450px] w-full bg-white flex flex-col justify-evenly">
        <div className="relative h-[10px] w-[90%] bg-[#782B00]/50 mt-[50px] mx-auto sm:w-[80%]"></div>
        <div className="relative h-[300px] w-[60%] ml-[30px] reveal_x sm:w-[40%] sm:ml-[15%] sm:mt-[50px]">
          <p className="text-center text-[16px] text-black/50 leading-8  sm:text-[20px]">
            I am doing my self-learning practice on creating personal projects
            to further improve my programming skills and knowledge. Here are
            some of my personal projects. All of my projects are in my GitHub
            repository.
          </p>
        </div>
      </section>
      <section className="relative h-[750px] w-full bg-white  overflow-x-hidden sm:h-[500px]">
        <div className="relative h-full w-[90%] flex flex-col items-center justify-start mx-auto sm:flex-row sm:items-start sm:w-[80%]">
          <div className="relative h-[150px] w-full flex items-center justify-center move_r sm:h-[250px] sm:w-[450px]">
            <img
              src={ecommerce_icon}
              alt=""
              className="relative h-full w-[70%] bg-gray-500 flex flex-col items-center justify-start mt-[50px] sm:w-full"
            />
          </div>
          <div className="relative h-[600px] w-full flex flex-col items-center justify-start sm:h-[250px] sm:w-[50%] sm:items-start sm:ml-[25px]">
            <p className="font-bold text-black text-[16px] mt-[25px] move_l">
              E-Commerce Website
            </p>
            <p className="text-[14px] text-justify text-black/50 mt-[25px] leading-8 move_r sm:ml-[50px]">
              This project was the updated version of my old project to learn
              Node JS. I recreated this projects after I am comfortable on using
              ReactJS and Node JS. As well as using this as a way to learn
              TypeScript in the process.
            </p>
            <p className="text-[16px] text-justify text-black/50 mt-[25px] leading-8 font-bold move_l sm:ml-[50px]">
              Technologies:
            </p>
            <ul className="text-black/50 text-[14px] leading-8 move_l sm:ml-[50px] sm:flex sm:flex-col sm:items-start">
              <li>React JS</li>
              <li>TypeScript</li>
              <li>Node JS</li>
              <li>MongoDB</li>
              <li>Express JS</li>
            </ul>
            <a
              href="https://github.com/torisutanjon/updated-ecommerce"
              className="text-[#FFA500] text-[14px] font-bold mt-[50px] move_r sm:mx-auto"
            >
              Click Here to View
            </a>
          </div>
        </div>
      </section>
      <section className="relative h-[750px] w-full bg-white  overflow-x-hidden sm:h-[500px]">
        <div className="relative h-full w-[90%] flex flex-col items-center justify-start mx-auto sm:flex-row sm:items-start sm:w-[80%]">
          <div className="relative h-[150px] w-full flex items-center justify-center move_r sm:h-[250px] sm:w-[450px]">
            <img
              src={nft_ecommerce_icon}
              alt=""
              className="relative h-full w-[70%] bg-gray-500 flex flex-col items-center justify-start mt-[50px] sm:w-full"
            />
          </div>
          <div className="relative h-[600px] w-full flex flex-col items-center justify-start sm:h-[250px] sm:w-[50%] sm:items-start sm:ml-[25px]">
            <p className="font-bold text-black text-[16px] mt-[25px] move_l">
              Mern Stack Website with NextJS
            </p>
            <p className="text-[14px] text-justify text-black/50 mt-[25px] leading-8 move_r sm:ml-[50px]">
              I was completely absorbed by React JS when I heard about Next JS
              and what it does. As I was excited about it being a React JS
              framework but having the web app being served in the server-side,
              I decided to try it out. And so this was the reason this project
              was created.
            </p>
            <p className="text-[16px] text-justify text-black/50 mt-[25px] leading-8 font-bold move_l sm:ml-[50px]">
              Technologies:
            </p>
            <ul className="text-black/50 text-[14px] leading-8 move_l sm:ml-[50px] sm:flex sm:flex-col sm:items-start">
              <li>Next JS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
              <li>Express JS</li>
            </ul>
            <a
              href="https://github.com/torisutanjon/nft-ecommerce"
              className="text-[#FFA500] text-[14px] font-bold mt-[50px] move_r sm:mx-auto"
            >
              Click Here to View
            </a>
          </div>
        </div>
      </section>
      <section className="relative h-[750px] w-full bg-white  overflow-x-hidden sm:h-[500px]">
        <div className="relative h-full w-[90%] flex flex-col items-center justify-start mx-auto sm:flex-row sm:items-start sm:w-[80%]">
          <div className="relative h-[150px] w-full flex items-center justify-center move_r sm:h-[250px] sm:w-[450px]">
            <img
              src={exchange_rate_icon}
              alt=""
              className="relative h-full w-[70%] bg-gray-500 flex flex-col items-center justify-start mt-[50px] sm:w-full"
            />
          </div>
          <div className="relative h-[600px] w-full flex flex-col items-center justify-start sm:h-[250px] sm:w-[50%] sm:items-start sm:ml-[25px]">
            <p className="font-bold text-black text-[16px] mt-[25px] move_l">
              Exchange Rate Software using Java
            </p>
            <p className="text-[14px] text-justify text-black/50 mt-[25px] leading-8 move_r sm:ml-[50px]">
              This was just a silly project of mine just for me to remember how
              to do desktop development.
            </p>
            <p className="text-[16px] text-justify text-black/50 mt-[25px] leading-8 font-bold move_l sm:ml-[50px]">
              Technologies:
            </p>
            <ul className="text-black/50 text-[14px] leading-8 move_l sm:ml-[50px] sm:flex sm:flex-col sm:items-start">
              <li>Java</li>
              <li>NetBeans 14</li>
              <li>Exchange Rate API</li>
            </ul>
            <a
              href="https://github.com/torisutanjon/nft-ecommerce"
              className="text-[#FFA500] text-[14px] font-bold mt-[50px] move_r sm:mx-auto"
            >
              Click Here to View
            </a>
          </div>
        </div>
      </section>
      <section className="relative h-[850px] w-full bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative h-full w-full bg-[#9C3902]/50 flex flex-col items-center justify-start sm:w-[90%] sm:rounded-[25px]">
          <div className="absolute h-[10px] w-[75%] bg-[#FFA500]/50 mt-[30px] left-[20px] sm:w-[20%] sm:left-auto"></div>
          <p className="text-white/75 font-bold text-[18px] mt-[45px]">
            My Technologies
          </p>
          <div className="absolute h-[10px] w-[75%] bg-[#FFA500]/50 mt-[80px] right-[20px] sm:w-[20%] sm:right-auto"></div>
          <div className="absolute bottom-0 h-[90%] w-full flex flex-col items-center justify-evenly sm:flex-row">
            <div className="relative h-[200px] w-[80%] bg-[#0A0A0A]/25 rounded-2xl flex flex-col items-start justify-evenly text-white text-[14px] pl-[15%] sm:h-[60%] sm:w-[25%] sm:pl-[5%]">
              <p>JAVASCRIPT</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>TYPESCRIPT</p>
            </div>
            <div className="relative h-[200px] w-[80%] bg-[#0A0A0A]/25 rounded-2xl flex flex-col items-start justify-start text-white text-[14px] pl-[15%] sm:h-[60%] sm:w-[25%] sm:pl-[5%]">
              <p className="mt-[25px] sm:mt-[70px]">VISUAL STUDIO CODE</p>
              <p className="mt-[25px] sm:mt-[70px]">GITBASH</p>
              <p className="mt-[25px] sm:mt-[70px]">FIGMA</p>
            </div>
            <div className="relative h-[200px] w-[80%] bg-[#0A0A0A]/25 rounded-2xl flex flex-col items-start justify-evenly text-white text-[14px] pl-[15%] sm:h-[60%] sm:w-[25%] sm:pl-[5%]">
              <p>GITHUB</p>
              <p>MONGODB</p>
              <p>MERN STACK</p>
              <p>NPM</p>
              <p>TAILWIND CSS</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative h-[200px] w-full bg-white">
        <div className="relative h-full w-full bg-[#D9D9D9]/35 flex flex-col items-center justify-start sm:flex-row sm:justify-between">
          <div className="relative h-2/5 w-full flex flex-col items-center justify-center text-black/50 sm:h-full sm:w-1/3 sm:items-start sm:ml-[5%]">
            <p className="text-[14px] sm:text-[22px]">TRISTAN JOHN P. GIRAO</p>
            <p className="text-[11px] sm:text-[16px]">09502099003</p>
            <p className="text-[11px] sm:text-[16px]">giraotristan@gmail.com</p>
          </div>
          <div className="relative h-2/5 w-full flex flex-row items-center justify-evenly sm:h-full sm:w-1/3">
            <img
              src={linked_in_icon}
              alt=""
              className="h-[40px] w-[40px] rounded-lg border-none outline-none sm:h-[65px] sm:w-[65px]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tristan-john-girao-69521a201/"
                )
              }
            />
            <img
              src={github_icon}
              alt=""
              className="h-[40px] w-[40px] rounded-lg border-none outline-none sm:h-[65px] sm:w-[65px]"
              onClick={() => window.open("https://github.com/torisutanjon")}
            />
            <img
              src={fb_icon}
              alt=""
              className="h-[40px] w-[40px] rounded-lg border-none outline-none sm:h-[65px] sm:w-[65px]"
              onClick={() =>
                window.open("https://www.facebook.com/tristanjohn.girao")
              }
            />
            <img
              src={twitter_icon}
              alt=""
              className="h-[40px] w-[40px] rounded-lg border-none outline-none sm:h-[65px] sm:w-[65px]"
              onClick={() => window.open("https://twitter.com/GiraoJ4nj4n")}
            />
          </div>
          <div className="relative h-1/5 w-full bg-[#371400] sm:hidden"></div>
        </div>
      </footer>
    </div>
  );
};
