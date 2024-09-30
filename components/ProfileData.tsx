"use client";

import React from "react";
import Contact from "./Contact";
import { motion } from "framer-motion";

const ProfileData = () => {
  return (
    <main>
      <motion.div
        className="flex space-x-3 items-center mb-3 md:mb-6 "
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}>
        {/* <div className="w-12 h-1 bg-gray-100 flex"></div> */}
        <h2 className="text-gray-100 text-3xl md:text-5xl font-bold ">
          {" "}
          {"> "}Victor Manuel
        </h2>
      </motion.div>
      <motion.p
        className="text-xl text-transparent bg-clip-text bg-gradient-to-r to-[#dbe5e3] from-[#9ce1d1] mb-2 font-extralight"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}>
        @Software developer
      </motion.p>
      <motion.p
        className="w-auto lg:w-[500px] text-gray-100"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}>
        {"I´m"} currently studying an artificial intelligence engineering degree
        at {""}
        <a
          href="https://www.escom.ipn.mx"
          target="_blank"
          className="underline">
          ESCOM
        </a>
        , where I combine my passion for software development with the world of
        technology. 💻
      </motion.p>

      <section className="mt-4">
        <Contact />
      </section>
    </main>
  );
};

export default ProfileData;
