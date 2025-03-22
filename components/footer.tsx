import Image from "next/image";
import Link from "next/link";
import { Footer as FlowbiteFooter } from "flowbite-react"; // Renamed to avoid conflict
import { BsFacebook, BsInstagram, BsThreads, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium">
          <Image
            src={"/logo/logo.png"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left text-xl text-gray-500 hover:text-[#ff4321]">+1 (406)-604-2821</p>
        <p className="text-left text-xl text-gray-500 hover:text-[#ff4321]">
          info@digitalcraftseo.com
        </p>

        <div className="mt-0 flex space-x-6 sm:mt-0 sm:justify-center">
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.instagram.com/dcs_business_solutions/" icon={BsInstagram} />
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.facebook.com/people/Digital-Craft-SEO/61569363227092/?mibextid=ZbWKwL" icon={BsFacebook} />
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.youtube.com/@digitalcraftseo" icon={BsYoutube} />
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.threads.net/@digitalcraftseo_" icon={BsThreads} />
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.twitter.com/@digitalcraftseo" icon={BsTwitter} />
          <FlowbiteFooter.Icon className="hover:text-[#ff4321]" href="https://www.tiktok.com/@digitalcraftseo" icon={BsTiktok} />
        </div>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2025 Digital Craft Seo LLC. All Rights Reserved.
        <Link href="/" className="text-gray-500 hover:text-[#ff4321]">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
