import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

const VerticalNavBar = () => {
  return (
    <nav className="fixed z-2 top-0 min-h-screen w-20 bg-[#FFF5E4] backdrop-blur-sm shadow-lg">
      <div className="flex flex-col justify-between min-h-screen p-4">
        <ul className="space-y-6 flex flex-col items-center">
          <li>
            <Link legacyBehavior href="#">
              <Image src="fuwa_dark.svg" alt="logo" width={50} height={50} />
            </Link>
          </li>


          <li>
            <Link legacyBehavior href="#projects">
              <a className="text-[#8785A2] hover:text-gray-900 vertical-text uppercase">
                projects
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#about">
              <a className="text-[#8785A2] bg-blend-difference hover:text-gray-900 vertical-text uppercase">
                about
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#contact">
              <a className="text-[#8785A2] hover:text-gray-900 vertical-text uppercase">
                contact
              </a>
            </Link>
          </li>
        </ul>
        <ul className="space-y-6 flex flex-col items-center">
          <li>
            <Link legacyBehavior href="/github">
              <a className="text-[#8785A2] hover:text-gray-900 text-2xl uppercase">
                <BsGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/twitter">
              <a className="text-[#8785A2] hover:text-gray-900 text-2xl uppercase">
                <BsTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/linkedin">
              <a className="text-[#8785A2]   hover:text-gray-900 text-2xl uppercase">
                <BsLinkedin />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default VerticalNavBar;
