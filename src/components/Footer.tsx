import React from "react";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div
      id="contacts"
      className="py-5 mt-7 w-full bg-slate-800 text-center text-gray-300"
    >
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Ian Mlolwa
      </a>
      <a
        href="mailto:ianmlolwa2@gmail.com"
        className="font-regular text-sm md:text-md hover:text-indigo-500"
      >
        ianmlolwa2@gmail.com
      </a>

      <p className="fs-4 lh-lg">
        <a className="p-2" href="https://www.facebook.com/ian.mwamburi">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="p-2" href="https://www.instagram.com/ianmlolwa/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="p-2" href="https://github.com/Ian-Mlolwa">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="p-2"
          href="https://www.linkedin.com/in/ian-mlolwa-b18195215/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </p>
      <p className="text-xs font-regular mt-2 text-grey-500">
        @ Ian Mlolwa {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
