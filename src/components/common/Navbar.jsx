"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";
import Magnetic from "@/components/animations/Magnetic";
import Menu from "./Menu";
import Link from "next/link";
// import { Link } from """;
const linklist = [
  {
    title: "Home",
    path: "",
    color: "#00FAFF",
  },
  {
    title: "Works",
    path: "work",
    color: "#00FAFF",
  },
  {
    title: "About",
    path: "about",
    color: "#FFC700",
  },
];
const dropdownOptions = [
  { label: "Leetcode", url: "https://leetcode.com/u/Aaquib_Shahzada/" },
  { label: "Github", url: "https://github.com/ASAR502/" },
  { label:"Linkdein", url:"https://www.linkedin.com/in/aaquib-shahzada-6193421a7/"},
  { label: "Twitter", url: "https://x.com/aaquib_shahzada" },
  { label: "GeekforGeek", url: "https://www.geeksforgeeks.org/user/aaquibm502/" },
];
const Navbar = ({ type }) => {
  const handleRedirect = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
  };

  const [menu, setMenu] = useState(false);
  return (
    <div
      style={{
        backdropFilter: "blur(54px)",
      }}
      className="w-full z-[40000] py-4 md:py-0 border-b border-[rgba(255,255,255,.1)] left-0 top-0 bg-[rgb(0 0 0 / 32%)]"
    >
      <AnimatePresence mode="wait">
        {<Menu setMenu={setMenu} menu={menu} />}
      </AnimatePresence>

      <div className="w-full py-0 md:py-4 z-[4000] ">
        <div
          className={`w-[90%] mx-auto max-w-custom ${
            type === "contact" ? "text-white" : "text-text_dark_1"
          } flex items-center justify-space gap-4 py-4`}
        >
          <div className="flex items-center gap-4">
            <img
              alt="Cotion"
              src={"/images/profile_6.png"}
              className="w-[45px] rounded-full h-[45px] object-cover"
            />
            <h4 className="relative  md:flex hidden z-50 text-2xl lg:w-[300px] w-full overflow-hidden font-portfolio_bold1">
              <Link
                href={"/"}
                className="text-xl lg:text-2xl text-[var(--light-grey)] w-full font-portfolio_regular"
              >
                Aaquib Shahzada
              </Link>
            </h4>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden lg:flex item-center justify-end flex-1 gap-12 md:gap-16">
              {linklist?.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${link?.path}`}
                    className="text-lg lg:text-xl hover:text-[var(--primary)] text-[var(--light-grey)] font-portfolio_regular"
                  >
                    {link?.title}
                  </Link>
                );
              })}
              <Link
                href={"https://drive.google.com/file/d/1n2i-DHPCVssYJYC4FPTqgGMmcnCpGlnQ/view"}
                className="text-lg lg:text-xl text-[var(--primary)] font-portfolio_regular"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
          <div   className="text-lg lg:text-xl hover:text-[var(--primary)] text-[var(--light-grey)] font-portfolio_regular">
            <select
              className="bg-transparent rounded px-3 py-2 text-white border-none focus:outline-none focus:ring-0"
              onChange={handleRedirect}
              defaultValue=""
            >
              <option value="" disabled>
                Coding Profile
              </option>

              {dropdownOptions.map((option, index) => (
                <option
                className="bg-[var(--dropdown-option-bg)] text-white hover:bg-[var(--dropdown-option-hover)]" // Styling options
                  key={index}
                  value={option.url}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          </div>
          <div className="flex flex-1 items-center justify-end ">
            <Link
              style={{
                transition: "all .6s",
              }}
              href={`mailto:aaquibm502@gmail.com?subject=Hey! lets work! Love your works!`}
              className="text-base w-[150px] h-[50px] lg:h-[56px] rounded-full bg-white hover:text-[#000] text-[#000] font-portfolio_regular"
            >
              <Magnetic bgColor={"#eee"}>Contact Me!</Magnetic>
            </Link>

            <div
              onClick={() => setMenu(true)}
              className="cursor-pointer text-2xl text-white flex lg:hidden rounded-full items-center justify-center"
            >
              <HiBars3BottomRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
