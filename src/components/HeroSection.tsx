import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex items-center justify-center
       flex-col py-20"
    >
      <div className="text-center">
        <h1
          className="text-2xl md:text-4xl mb-1 md:mb-3
        text-indigo-600 font-semibold"
        >
          Hi There, An Ian Mlolwa.
        </h1>
      </div>
      <p
        className="text-md md:text-xl max-w-md mb-3
          text-grey-600 dark:text-white"
      >
        Web developer
        <cite title="Source Title"> fullstack</cite>
      </p>
      <a
        href="#"
        className="inline-block px-8 py-3
          border-transpaent text-base font-medium rounded-md
          text-white bg-indigo-600 hover:bg-indigo-700
          md:text-md"
        role="button"
        aria-disabled="true"
      >
        See Works
      </a>
    </div>
  );
};

export default HeroSection;
