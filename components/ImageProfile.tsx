"use client";

import "./css/ImageProfile.css";
import React from "react";
import { motion } from "framer-motion";

const ImageProfile = () => {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}>
      <div className="image"></div>
    </motion.div>
  );
};

export default ImageProfile;
