import React from "react";
// import { Link } from "react-router-dom";

import profileImage from "../assets/img/profile/headshot.png";

export const About: React.FC = () => {
  return (
    <div
      className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center 
      justify-center bg-backgroundDark p-3 pt-6 
      sm:space-y-6 md:flex-row md:space-x-16 md:space-y-0 md:p-6"
    >
      <img
        src={profileImage}
        alt="Profile"
        className="mb-6 aspect-square h-auto w-40 overflow-hidden rounded-full 
        object-cover object-bottom 
        sm:w-52 md:mb-6 md:w-60"
      />
      <div
        className="m-4 text-center font-body text-lg font-thin
      leading-relaxed text-primaryVariant sm:text-xl
      md:max-w-72 md:text-left lg:max-w-80 xl:max-w-96"
      >
        <h1
          className="mb-4 font-header text-2xl 
        font-medium leading-relaxed sm:text-4xl"
        >
          Hi, I'm Aly!
        </h1>
        <p className="mb-4">
          I'm a passionate software engineer and game developer with{" "}
          <span className="font-normal text-secondary">2 years</span> of
          professional experience in{" "}
          <span className="font-normal text-secondary">Unity</span>.
        </p>
        <p className="mb-4">
          I am particularly interested in crafting co-op experiences, and love
          to geek out on well-designed architecture.
        </p>
        <p className="mb-4">
          I've worked on a number of{" "}
          <a
            href="https://afterlight-game.github.io"
            target="_blank"
            className="font-normal text-accent 
            hover:font-semibold hover:text-primary"
          >
            games
          </a>{" "}
          over the years, some of which are in active{" "}
          <a
            href="https://rift-n-sync.github.io/"
            target="_blank"
            className="font-normal text-accent 
            hover:font-semibold hover:text-primary"
          >
            development
          </a>{" "}
          for PAX 2024!
        </p>
        <p>I'm currently looking for a job as a game or software developer.</p>
      </div>
    </div>
  );
};
