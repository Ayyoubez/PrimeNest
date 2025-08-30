import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute left-0 top-0 w-full z-10 ">
      <div className=" container flex justify-between items-center mx-auto py-4 px-6  md:px-20 lg:px-24 bg-transparent">
        <img src={assets.logo} alt="" className="w-50" />

        <ul className="hidden md:flex gap-7 text-white ">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#About">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Projects">
            Projects
          </a>
          <a
            className="cursor-pointer hover:text-gray-400"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => {
            setShowMobileMenu(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-6 cursor-pointer"
        />
      </div>
      {/*-------------------- Mobile Menu-------------------------- */}
      <div
        className={`transition-all bg-white md:hidden ${
          showMobileMenu ? "w-3/4 h-screen" : " w-0 h-0"
        } overflow-hidden fixed top-0 right-0 bottom-0`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => {
              setShowMobileMenu(false);
            }}
            src={assets.cross_icon}
            alt=""
            className="w-6 cursor-pointer"
          />
        </div>
        {/* <ul className="flex flex-col items-center font-medium gap-2 mt-5 text-lg">
          <a
            onClick={() => {
              setShowMobileMenu(false);
            }}
            href="#Home"
            className="px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="px-4 py-2 rounded-full"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul> */}
        <ul className="flex flex-col items-center font-medium gap-2 mt-5 text-lg">
          {["Home", "About", "Projects", "Testimonials"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
