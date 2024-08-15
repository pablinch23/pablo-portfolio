"use client";

import React from "react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Mail from "./icons/Mail";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.main
      className=""
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.25 }}>
      <p className="text-gray-100 text-lg mb-2 font-semibold">Contact me:</p>
      <section className="flex space-x-4 justify-center">
        <a
          className="relative inline-flex h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300"
          href="https://github.com/mvnueloc"
          target="_blank">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <Github className="w-6 h-6" />
            <p>Github</p>
          </span>
        </a>

        <a
          className="relative inline-flex h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300"
          href="https://www.linkedin.com/in/victorolguinc/"
          target="_blank">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <Linkedin className="w-6 h-6" />
            <p>Linkedin</p>
          </span>
        </a>

        <a
          className="relative h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300 hidden md:inline-flex"
          href="mailto:volguincas@gmail.com"
          target="_blank">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <Mail className="w-6 h-6" />
            <p>volguincas@gmail.com</p>
          </span>
        </a>
      </section>
      <section className="flex justify-center  mt-4">
        <a
          className="relative h-8 md:h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition-all duration-300 inline-flex md:hidden"
          href="mailto:volguincas@gmail.com"
          target="_blank">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 md:px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <Mail className="w-6 h-6" />
            <p>volguincas@gmail.com</p>
          </span>
        </a>
      </section>
    </motion.main>
  );
};

export default Contact;
