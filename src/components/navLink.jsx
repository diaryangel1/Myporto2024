"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  // menggunakan pathname hook
  const pathName = usePathname();

  return (
    <Link
      // jika pathName sma dengan juga link url maka background jadi hitam
      className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
