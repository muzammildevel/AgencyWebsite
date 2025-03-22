"use client";

import React, { } from "react";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Spotlight from "@/components/spotlight";
import RainbowCursor from "@/components/rainbow-cursor/rainbow-cursor"
import { Testimonials } from "@/components/Testimonials";
import Headroom from "react-headroom";
import { FAQAccordion } from "@/components/faq-accordion"
import { BRANDS } from "@/components/page.constants";
import CoolMarquee from "@/components/CoolMarquee";
import styles from "@/page.module.scss"
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsThreads, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0-z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
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
              <Link href={"/showcase"} className="hover:text-[#ff4321]">
                Projects
              </Link>

              <ScrollLink
                to="services"
                smooth={true}
                className="hover:text-[#ff4321]"
              >
                Services
              </ScrollLink>

              <ScrollLink
                to="process"
                smooth={true}
                className="hover:text-[#ff4321]"
              >
                Process
              </ScrollLink>

              <ScrollLink
                to="guarentees"
                smooth={true}
                className="hover:text-[#ff4321]"
              >
                Guarentees
              </ScrollLink>

              <ScrollLink
                to="pricing"
                smooth={true}
                className="hover:text-[#ff4321]"
              >
                Pricing
              </ScrollLink>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
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

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Marketing is not all about running ads its about making a good place in someone heart for your brand
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#ff4321] 
      rounded-[6px]
      border-2 
      border-[ff4321] 
      dark:border-[#ff4321] 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Become a client +
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white py-3 px-10 md:px-16 md:text-xl border-2 border-black dark:border-black rounded-[6px]
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Projects we&apos;re Showcasing
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#ff4321"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#ff4321]" />
                Management
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ff4321"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#ff4321]" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ff4321"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#ff4321]" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ff4321"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#ff4321]" />
                Design
              </p>
            </BoxReveal>
          </div>

          <section>
            <CoolMarquee>
              {BRANDS.map(brand => (
                <img
                  src={`/images/brands/${brand}.png`}
                  key={brand}
                  className={styles.brand}
                  alt={brand}
                />
              ))}
            </CoolMarquee>
          </section>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={1500} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="right"
                items={[
                  {
                    logo: "/companies/logo01.svg",
                    name: "Logo02",
                  },
                  {
                    logo: "/companies/logo02.png",
                    name: "Logo03",
                  },
                  {
                    logo: "/companies/logo03.png",
                    name: "Logo04",
                  },
                  {
                    logo: "/companies/logo04.svg",
                    name: "Logo05",
                  },
                  {
                    logo: "/companies/logo05.png",
                    name: "Logo06",
                  },
                  {
                    logo: "/companies/logo06.png",
                    name: "Logo07",
                  },
                  {
                    logo: "/companies/logo07.png",
                    name: "Logo08",
                  },
                  {
                    logo: "/companies/logo08.svg",
                    name: "Logo09",
                  },
                  {
                    logo: "/companies/logo09.png",
                    name: "Logo10",
                  },
                  {
                    logo: "/companies/logo010.png",
                    name: "Logo11",
                  },
                  {
                    logo: "/companies/logo011.png",
                    name: "Logo12",
                  },
                  {
                    logo: "/companies/logo012.svg",
                    name: "Logo13",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            With a 100% Trusted Ratio from our clients All of our services are designed to help your brand to get
            a good bussiness.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>

          </div>

        </main>
      </Element>


      <section>
        <ThreeDMarqueeDemo />
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <Element name="testimonials" className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <Testimonials />
      </Element>

      <Element name="pricing" className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <Spotlight />
      </Element>

      <Element name="faq" className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <FAQAccordion />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl text-gray-500 hover:text-[#ff4321]">+1 (406)-604-2821</p>
          <p className="text-left  text-xl text-gray-500 hover:text-[#ff4321]">
            info@digitalcraftseo.com
          </p>

          <div className="mt-0 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.instagram.com/dcs_business_solutions/" icon={BsInstagram} />
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.facebook.com/people/Digital-Craft-SEO/61569363227092/?mibextid=ZbWKwL" icon={BsFacebook} />
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.youtube.com/@digitalcraftseo" icon={BsYoutube} />
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.threads.net/@digitalcraftseo_" icon={BsThreads} />
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.twitter.com/@digitalcraftseo" icon={BsTwitter} />
            <Footer.Icon className="hover:text-[#ff4321]" href="https://www.tiktok.com/@digitalcraftseo" icon={BsTiktok} />
          </div>
        </div>



        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Digital Craft Seo LLC. All Rights Reserved.
          <Link href="/" className="text-gray-500 hover:text-[#ff4321]">
            Privacy Policy
          </Link>
        </div>
      </footer>
      <RainbowCursor />
    </div>
  );
}
