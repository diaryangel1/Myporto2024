"use client";
import { motion } from "framer-motion";
import React from "react";

const PortofolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2 }}
    >
      Portofolio
    </motion.div>
  );
};

export default PortofolioPage;
