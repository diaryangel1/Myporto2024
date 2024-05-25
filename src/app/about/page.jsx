"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIO CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            <p className="text-lg">I am who loves creating visually stunning and user-friendly websites. I have a strong passion for front-end development and am always looking for new ways to deliver high-quality results. I am also a designer with a creative background, and I enjoy working with clients to bring their visions to life.</p>
            <span className="italic">Thank you for taking the time to read through my portfolio, and I look forward to connecting with you soon!</span>
            {/* signature svg */}
            <div className="self-end">
              <Image
                src="/signature.gif"
                alt="Signature"
                width="185"
                height="77"
              />
            </div>
            {/* biography scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER / mytools*/}
          <div className="flex flex-col gap-12 justify-center">
            {/* mytools */}
            <h1 className="text-2xl font-bold">MyTools</h1>
            {/* Mytools list */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Capcut</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Adobe Photoshop</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Adobe Premiere</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Adobe Ilustrator</div>
            </div>
            {/* mytools scrool svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="lex flex-col gap-12 justify-center pb-48">
            {/* experience title */}
            <h1 className="text-2xl font-bold">MyExperience</h1>

            {/* experience list */}
            <div className="">
              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* LEFT side FIRST*/}
                <div className="w-1/3 bg-red-200">
                  {/* job tittle */}
                  <div className="rounded-b-lg rounded-s-lg font-semibold p-3 bg-white ">Frontend Developer</div>
                  {/* job desc */}
                  <div className="text-sm p-3 italic">I am a frontend at creative agency and company</div>
                  {/* job date */}
                  <div className="text-sm p-3 font-semibold text-red-400">2022 - Present</div>
                  {/* company name */}
                  <div className="text-sm p-1 rounded bg-white font-semibold w-fit">Creative Agency</div>
                </div>

                {/* CENTER graphic line visual vertical 1 */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 ring-4 ring-red-400 bg-white rounded-full -left-2"></div>
                  </div>
                </div>

                {/* right side */}
                <div className="w-1/3 bg-red-200"></div>
              </div>
              <div>
                {/* LEFT side  SECOND*/}
                <div></div>

                {/* CENTER graphic line visual vertical */}
                <div>
                  {/* line */}
                  <div>
                    {/* line circle */}
                    <div></div>
                  </div>
                </div>

                {/* right side */}
                <div className="w-1/3">
                  {/* job tittle */}
                  <div className="rounded-b-lg rounded-s-lg font-semibold p-3 bg-white">Frontend Developer</div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">I am a frontend at creative agency and company</div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2022 - Present</div>
                  {/* company name */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Creative Agency</div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                {/* LEFT side THIRD*/}
                <div className="w-1/3">
                  {/* job tittle */}
                  <div className="rounded-b-lg rounded-s-lg font-semibold p-3 bg-white">Frontend Developer</div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">I am a frontend at creative agency and company</div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2022 - Present</div>
                  {/* company name */}
                  <div className="text-sm">Creative Agency</div>
                </div>

                {/* CENTER graphic line visual vertical */}
                <div>
                  {/* line */}
                  <div>
                    {/* line circle */}
                    <div></div>
                  </div>
                </div>

                {/* right side */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
      </div>
    </motion.div>
  );
};

export default AboutPage;
