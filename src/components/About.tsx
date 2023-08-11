import React from "react";
import { SectionTitle } from "./SectionTitle";
import pic from "../assets/images/mypic.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
    >
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          About me text is here
        </p>
        <a
          href="mailto:ianmlolwa2@gmail.com"
          className="block mt-3 text-md md:text-lg font-regular
           text-gray-700 dark:text-gray-300 underline
            hover:text-indigo-500 py-3 dark:hover:text-indigo-500"
        >
          ianmlolwa2@gmail.com
        </a>
      </div>
      <img
        src={pic}
        alt="Ian Mlolwa"
        className="w-full md:w-4/12 rounded-lg object-cover"
      />
    </div>
  );
};

export default About;
