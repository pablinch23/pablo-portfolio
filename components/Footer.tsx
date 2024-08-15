import React from "react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Terminal from "./icons/Terminal";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow mt-4 ">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Terminal className="w-6 h-6" />{" "}
          <p>Manuel Olguin | Ciudad de México 🇲🇽</p>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/mvnueloc"
              target="_blank"
              className="hover:underline mx-6 md:mx-12">
              <Github className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victorolguinc/"
              target="_blank"
              className="hover:underline mx-6 md:mx-12">
              <Linkedin className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
