/* eslint-disable react/no-unescaped-entities */
import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import avatarBg from "./avatarBg.svg";

export default function Body() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-[85%] mx-auto gap-10 md:gap-6 px-4 py-8">
      <div className="md:col-span-2 text-5xl md:text-6xl font-bold flex flex-col gap-3 md:gap-5">
        <span>Hey there,</span>
        <span>I'm Mustafa</span>
        <p className="md:hidden text-lg font-light">
          Web programmer , UI/UX Designer & Projects coordinator
        </p>
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-4 md:gap-3 text-left md:text-right">
        <div className="md:flex flex-col text-left md:text-right">
          <span className="text-lg md:text-xl">Years</span>{" "}
          <span className="text-lg md:text-xl">Experience</span>
        </div>
        <span className="text-3xl md:text-5xl font-medium">4</span>
      </div>

      <div className="hidden md:flex flex-col gap-6 font-medium text-left">
        <p>Web programmer , UI/UX Designer, Projects coordinator</p>
        <div className="flex gap-3">
          <span className="text-3xl text-[#ea4c1d] p-2 rounded-full bg-secondary">
            <FaFigma />
          </span>
          <span className="text-3xl text-[#5ed3f3] p-2 rounded-full bg-secondary">
            <FaReact />
          </span>
          <span className="text-3xl text-[#38bdf8] p-2 rounded-full bg-secondary">
            <RiTailwindCssFill />
          </span>
        </div>
        <p className="flex flex-col">
          Email{" "}
          <a
            href="mailto:asasimr55@gmail.com"
            className="text-primary font-bold"
          >
            asasimr55@gmail.com
          </a>
        </p>
      </div>

      <div className="relative justify-self-center w-full md:w-full h-[15rem] md:h-[30rem] flex justify-center md:justify-end">
        <img
          src="./avatarBg.svg"
          alt="Avatar Background"
          className="w-60 md:w-96 bottom-12 absolute inset-0 m-auto"
        />
        <img
          src="./avatar.png"
          alt="Avatar"
          className="w-60 md:w-96 absolute inset-0 m-auto"
        />
      </div>

      <div className="hidden md:flex flex-col items-end text-center md:text-right md:col-span-1">
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-4xl md:text-6xl text-[#5ed3f3] p-3 rounded-full bg-secondary flex items-center justify-center">
            <FaReact className="rotating " />
          </span>
          <span className="text-xl md:text-2xl">
            React <br /> Development
          </span>
        </div>
      </div>
    </div>
  );
}
