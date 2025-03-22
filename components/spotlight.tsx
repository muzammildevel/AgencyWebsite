"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Spotlight = () => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: PointerEvent) => {
    const documentTarget = e.currentTarget as Element;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (
    <>
      <main className="max-w-6xl py-12 mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Our Pricing Plans</div>
          </div>
          <h2 className="section-title mt-5">Affordable Plans</h2>
          <p className="section-description mt-5">
            Choose the plan that fits your business needs. Whether you're just starting or looking to scale, we've got you covered with flexible pricing options.
          </p>
        </div>
        <div className="relative" ref={cardsContainer}>
          <div className="flex flex-wrap gap-10 mt-10">
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-black border-blue-700 border border-solid rounded-xl transition-colors bg-[#ffffff] hover:bg-[#ffffff]">
              <h1 className="text-lg font-semibold">🤍 Basic Plan</h1>
              <h4 >Perfect for startups and small businesses looking to establish their online presence.</h4>
              <p className="text-2xl font-bold">$399/Monthly</p>
              <a
                href="#basic"
                className="block bg-black text-white rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Basic Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media management of 2 Platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">5 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Weekly and Monthly reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly Consultation</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Basic SEO up to 3 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Phone and Email Support</li>
              </ul>
            </div>
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-black border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#ffffff] hover:bg-[#ffffff]">
              <h1 className="text-lg font-semibold">👑 Premium Plan</h1>
                <div className="inline-flex text-lg px-12 py-1.5 rounded-xl border border-black/20 ">
                <motion.span
                  animate={{
                    backgroundPositionX: "-100%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-large">
                  Most Popular
                </motion.span>
              </div>
              <h4>Ideal for growing businesses aiming to expand their reach and brand value.</h4>
              <p className="text-2xl font-bold">$1199/Monthly</p>
              <a
                href="#pro"
                className="block bg-black text-white rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Premium Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media Management of 7 Platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">30 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">30 Static Designs Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly And Weekly Reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Website Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Standard SEO up to 7 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Weekly Consultation</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Setup and Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Business branding</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">24/5 Support Phone and Email</li>
              </ul>
            </div>
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-black border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#ffffff] hover:bg-[#ffffff]">
              <h1 className="text-lg font-semibold">⭐ Standard Plan</h1>
              <h4>Designed for those businesses and brands who are ready to scale to the next level.</h4>
              <p className="text-2xl font-bold">$699/Monthly</p>
              <a
                href="#ultimate"
                className="block bg-black text-white rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Standard Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Everything in Basic Plan +</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media Management of 5 platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">15 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">15 Static Designs Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly and weekly Reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Website Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Basic SEO up to 5 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Phone and Email Support</li>
              </ul>
            </div>
          </div>

          {/* twin cards */}
          <div
            className="flex flex-wrap gap-10 select-none pointer-events-none absolute inset-0"
            style={{
              opacity: "var(--opacity, 0)",
              mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
              WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            }}
          >
            {/* card */}
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-white border-blue-700 border-solid rounded-xl transition-colors bg-blue-600 text-transparent">
              <h1 className="text-lg font-semibold">🤍 Basic Plan</h1>
              <h4 >Perfect for startups and small businesses looking to establish their online presence.</h4>
              <p className="text-2xl font-bold">$399/Monthly</p>
              <a
                href="#basic"
                className="block border-green-700 bg-blue-600 rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Basic Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media management of 2 Platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">5 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Weekly and Monthly reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly Consultation</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Basic SEO up to 3 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Phone and Email Support</li>
              </ul>
            </div>
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-white border-purple-700 border-solid rounded-xl transition-colors bg-purple-700 text-transparent">
              <h1 className="text-lg font-semibold">👑 Premium Plan</h1>
              <div className="inline-flex text-lg px-12 py-1.5 rounded-xl border border-black/20 ">
                <motion.span
                  animate={{
                    backgroundPositionX: "-100%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-large">
                  Most Popular
                </motion.span>
              </div>
              <h4>Ideal for growing businesses aiming to expand their reach and brand value.</h4>
              <p className="text-2xl font-bold">$1199/Monthly</p>
              <a
                href="#pro"
                className="block border-purple-700 bg-purple-700 rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Premium Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media Management of 7 Platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">30 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">30 Static Designs Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly And Weekly Reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Website Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Standard SEO up to 7 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Weekly Consultation</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Setup and Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Business branding</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">24/5 Support Phone and Email</li>
              </ul>
            </div>
            <div className="card flex-1 flex flex-col items-start p-10 gap-5 text-white border-green-700 border-solid rounded-xl transition-colors bg-yellow-500 text-transparent">
              <h1 className="text-lg font-semibold">⭐ Standard Plan</h1>
              <h4>Designed for those businesses and brands who are ready to scale to the next level.</h4>
              <p className="text-2xl font-bold">$699/Monthly</p>
              <a
                href="#ultimate"
                className="block border-green-700 bg-yellow-500 rounded-lg p-3 w-full text-center font-semibold mt-3 mb-3"
              >
                Book Standard Plan
              </a>
              <ul className="list-none space-y-2">
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Everything in Basic Plan +</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Social Media Management of 5 platforms</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">15 Videos Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">15 Static Designs Monthly</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Monthly and weekly Reports</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Website Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Ad Campaign Management</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Basic SEO up to 5 Pages</li>
                <li className="before:inline-block before:content-['✔️'] before:mr-2">Phone and Email Support</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Spotlight;