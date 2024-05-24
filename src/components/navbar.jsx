"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

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
        <Link href="/">
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
        <Link href="#">
          <Image
            src="/instagram.png"
            alt="logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
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
        <Link href="#">
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
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen text-white bg-black flex flex-col gap-8 text-4xl items-center justify-center">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
