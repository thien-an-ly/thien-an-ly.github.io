import React from "react";
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from "react-icons/fa";

import profileImage from "../assets/img/profile/body-shot.jpg";

const socialPlatforms = [
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/thien-an-ly",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/thelazyant164",
  },
  {
    icon: <FaItchIo />,
    url: "https://thelazyant164.itch.io",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/the_lazy_ant164",
  },
];

export const Contact: React.FC = () => {
  return (
    <div
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center 
    bg-backgroundDark p-3 text-center
    sm:space-y-6 md:flex-row md:space-x-16 md:space-y-0 md:p-6 md:text-left"
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
        <h2
          className="mb-4 font-header text-xl 
        font-medium text-primaryVariant md:text-2xl"
        >
          Let's get in touch!
        </h2>
        <p className="mb-4">
          I would love to hear from you! Whether you have a question, want to
          collaborate on a project, or just want to say hi, feel free to reach
          out.
        </p>
        <p className="mb-4">
          You can contact me via email at:
          <a
            href="mailto:lythienan164@gmail.com"
            target="_blank"
            className="font-normal text-secondary 
            hover:font-semibold hover:text-primary"
          >
            {" "}
            lythienan164@gmail.com
          </a>
        </p>
        <p className="mb-2">Or find me on other platforms:</p>
        <div
          className="flex justify-center space-x-4 
            text-secondary
            md:justify-start"
        >
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center space-x-1 
              hover:text-primary"
            >
              {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
