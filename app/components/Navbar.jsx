"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link href="#about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-white hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
