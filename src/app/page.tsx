"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // agar home page ada transisi
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2 }}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 lg:flex-row xl:px-48 gap-4">
        {/* image container */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            src="/heros.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* title */}
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* description */}
          <p className="md:text-xl">Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a passion for design, I bring a unique perspective to every project.</p>
          {/* button view my work and contact me */}

          <div className="w-full flex gap-4">
            <button className="p-4 bg-black text-white rounded-lg ring-1 ring-black font-semibold">View my work</button>
            <button className="ring-1 ring-black rounded-md p-2 font-semibold">Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
