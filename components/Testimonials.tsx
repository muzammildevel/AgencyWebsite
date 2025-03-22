"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import React, { useEffect, useState } from "react";
import { div } from "framer-motion/client";
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    text: "As a designer always seeking innovative marketing solutions, DCS Design has revolutionized how I manage my social media presence and ads.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Since partnering with DCS Design, our social media engagement and targeted ads have significantly boosted, driving more leads and conversions.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "DCS Design's content marketing and SEO strategies have transformed our online visibility. Our website traffic and lead generation have skyrocketed.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "The integration of DCS Design's social media management and targeted ads into our marketing efforts was seamless. Our results speak for themselves.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "With DCS Design's help, our email marketing campaigns are more personalized and effective. They’ve taken our client outreach to new heights.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "From web design to SEO and social media marketing, DCS Design offers complete solutions that have helped us create a stronger online presence.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "DCS Design's approach to social media management and content creation has improved our brand's reach and engagement across all platforms.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Their expertise in website creation, SEO, and social media ads has made a huge difference. Our business is now more visible and accessible to our target audience.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "DCS Design has completely transformed our digital marketing strategy, from social media management to content creation. Their comprehensive services have made our brand stand out.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number; }) => (
  <motion.div 
  animate={{
    translateY: "-50%",
  }} transition={{
    duration: props.duration || 10,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop",
  }} className="props.className">
    <div className={"flex flex-col gap-6 pb-6"}>
  {[...new Array(2)].fill(0).map((_, outerIndex) => (
    <React.Fragment key={outerIndex}> {/* Unique key for React.Fragment */}
      {props.testimonials.map(({ text, imageSrc, name, username }, innerIndex) => (
        <div key={`${outerIndex}-${innerIndex}`} className="card"> {/* Unique key for each testimonial */}
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  ))}
</div>

  </motion.div>
);

export const Testimonials = () => {
  return (
    <section className="bg-transparent">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">what our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
