import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 ls:px-32 bg-gray-800 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consequuntur a earum quis aperiam dolorum, qui nihil, animi
            veritatis possimus eos commodi.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex gap-4 md:flex-col md:gap-2">
            <a className="text-gray-400 hover:text-white " href="#">
              Home
            </a>
            <a className="text-gray-400 hover:text-white " href="#About">
              About
            </a>
            <a className="text-gray-400 hover:text-white " href="#ContactUs">
              Contact Us
            </a>
            <a className="text-gray-400 hover:text-white " href="#">
              Privacy & Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            explicabo nam facere?
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="bg-blue-500 p-2 text-white px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-600 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © PrimeNest, All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
