"use client";
import React from "react";
import { motion } from "framer-motion";

const Letters = () => {
  return (
    <motion.div
      className="absolute w-full"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}>
      <img
        src="letters.svg"
        alt="Olguin Castillo en letras grandes"
      />
    </motion.div>
  );
};

export default Letters;
