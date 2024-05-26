"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }} // Delay added here
            className="h-full w-full relative"
          >
            <Image
              src="/heros.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* title */}
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* description */}
          <p className="md:text-xl">Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a passion for design, I bring a unique perspective to every project.</p>
          {/* button view my work and contact me */}

          <div className="w-full flex gap-4">
            <Link
              href="/portofolio"
              className="p-4 bg-black text-white rounded-lg ring-1 ring-black font-semibold cursor-pointer hover:bg-white hover:text-black"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="flex ring-1 ring-black rounded-md p-2 font-semibold items-center justify-center cursor-pointer hover:bg-slate-500 hover:text-white"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
