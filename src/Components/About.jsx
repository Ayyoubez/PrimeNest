import React from "react";
import { assets } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-2 ">
        About{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-400 max-w-80 text-center mb-8">
        Passionate about Properties, Dedicated to Your Vision.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-20 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className="border border-gray-300 p-5 rounded-lg">
              <p className="text-3xl font-medium text-gray-800 md:text-4xl">
                10+
              </p>
              <p className="">Years of Experience</p>
            </div>{" "}
            <div className="border border-gray-300 p-5 rounded-lg">
              <p className="text-3xl font-medium text-gray-800 md:text-4xl">
                12+
              </p>
              <p className="">Projects Completed</p>
            </div>{" "}
            <div className="border border-gray-300 p-5 rounded-lg">
              <p className="text-3xl font-medium text-gray-800 md:text-4xl">
                20+
              </p>
              <p className="">Mn. Sq ft. Delivered</p>
            </div>{" "}
            <div className="border border-gray-300 p-5 rounded-lg">
              <p className="text-3xl font-medium text-gray-800 md:text-4xl">
                25+
              </p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            ipsam pariatur temporibus veniam nesciunt a mollitia veritatis quae
            tempore. Aperiam aliquid, ab consequatur accusamus doloremque alias,
            necessitatibus ullam temporibus quaerat non voluptatem voluptate
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
