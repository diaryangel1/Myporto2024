"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  // make animated text container " Say hallo" infinite typing effect motion

  const text = "<Say Hello/>";

  // email condition true or false (succes set succes)

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // email js configuration

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
      () => {
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        setError(true);
      }
    );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-2 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        {/* <div className="h-1/2 xs:h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-8xl text-center  "> */}
        <div className="h-1/2 xs:h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-8xl text-center hidden sm:flex">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, delay: index * 0.1, repeat: Infinity }}
                className="xl:text-6xl md:text-3xl sm:text-lg xs:text-sm"
              >
                {letter}
              </motion.span>
            ))}
            {/* animasi kucing */}
            <motion.div
              initial={{ x: 30 }} // Start kucing 1 di kiri
              animate={{ x: [0, 30, 0] }} // Animasi kiri ke kanan
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              className="xl:text-6xl md:text-3xl sm:text-xl xs:text-sm"
            >
              🐱‍👤
            </motion.div>
            {/* animasi kucing 2 */}
            <motion.div
              // initial={{ x: 30 }} // Start kucing 2 di kanan
              animate={{ x: [-50, 50, -50] }} // Animasi kanan ke kiri
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
              className="xl:text-6xl md:text-3xl sm:text-xl xs:text-sm"
            >
              🐱‍💻
            </motion.div>
          </div>
        </div>
        {/* form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-3/4 xs:h-3/4 sm:h-3/4 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-24 xs:p-10 xs:gap-5 shadow-lg shadow-slate-500"
        >
          <span>Dear Sena Dev,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            // coonect with emailJS
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <button className="bg-purple-200 text-gray-600 p-4  hover:bg-slate-500 hover:text-white">Send</button>

          {/* condition email success or not */}
          {success && <span className="text-green-500">Your email has been sent!</span>}
          {error && <span className="text-red-500">Error, try again!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
