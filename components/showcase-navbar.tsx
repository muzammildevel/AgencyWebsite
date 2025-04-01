"use client"

import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";
import { Link as ScrollLink, Element } from "react-scroll";

const ShowcaseNavbar = () => {
  return (
    <Headroom>
        <Element
          name="top"
          className="overflow-hidden rounded-[6px] top-0 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[90%] bg-transparent backdrop-blur-lg flex items-center  justify-between py-6 px-4 md:px-8 mx-6"
        >
          <Link href={"/"}>
            <Image
              src={"/logo/logo1.png"}
              alt="Logo01"
              width={1000}
              height={1000}
              className="w-28"
            />
          </Link>

          <div className="absolute right-1/2 translate-x-1/2 transform">
            <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
              <Link href={"/"} className="hover:text-[#ff4321]">
                Home
              </Link>

              <Link
                href={"/"}
                className="hover:text-[#ff4321]"
              >
                Services
              </Link>

              <Link
                href={"/"}
                className="hover:text-[#ff4321]"
              >
                Process
              </Link>

              <Link
                href={"/"}
                className="hover:text-[#ff4321]"
              >
                Guarentees
              </Link>

              <Link
                href={"/"}
                className="hover:text-[#ff4321]"
              >
                Pricing
              </Link>
            </div>
            
            <a href="tel:7025188345" className="hidden lg:flex">
              <button className="px-4 py-2 rounded-md flex items-center gap-x-3 hover:text-[#ff4321]">
                +1 (702)-518-8345
              </button>
            </a>

            <Link
              href={"/meeting"}
              className="py-3 px-6 text-lg hover:bg-[#ff4321] rounded-[6px] border-2 border-[ff4321] dark:border-[#ff4321] text-white bg-[#121212] transition duration-200 
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              Book a Call
            </Link>
          </div>
        </Element>
      </Headroom>
  );
};

export default ShowcaseNavbar;
