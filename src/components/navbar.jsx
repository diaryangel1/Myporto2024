"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const Navbar = () => {
  // const menu link url and tittle
  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/portofolio",
      title: "Portofolio",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  // membuat state untuk menu hamburger open dan setopen
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  // animation on list menu at hamburger
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* link */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink
            key={link.title}
            link={link}
          />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Sena</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Dev</span>
        </Link>
      </div>
      {/* icon medsos */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/diaryangel1">
          <Image
            src="/github.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/dribbble.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.instagram.com/diaryangel717/">
          <Image
            src="/instagram.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.facebook.com/senna.feliz/">
          <Image
            src="/facebook.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/pinterest.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/sena-jumena-00b225220/">
          <Image
            src="/linkedin.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        {/* menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          // membuat saat onclik menu muncul
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* mengubah animasi garis menjadi tanda silang warna putih */}
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen text-white bg-black flex flex-col gap-8 text-4xl items-center justify-center z-40"
          >
            {/* animation menu list */}
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
