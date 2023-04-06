import React from "react";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

const icons = [
  {
    icon: <TiSocialFacebook size={20} color="white" />,
    href: "https://facebook.com",
  },
  {
    icon: <TiSocialTwitter size={20} color="white" />,
    href: "https://twitter.com",
  },
  {
    icon: <TiSocialLinkedin size={20} color="white" />,
    href: "https://linkedin.com",
  },
  {
    icon: <RiInstagramFill size={20} color="white" />,
    href: "https://instagram.com",
  },
  {
    icon: <RiYoutubeFill size={20} color="white" />,
    href: "https://youtube.com",
  },
];

const Socials = () => {
  return (
    <div className="bg-green-400 flex h-8 w-screen">
      <div className="text-white text-sm flex items-center ml-14">
        <div className="flex">
          <div className="justify-center border-r-2 pr-2">
            <div className="flex items-center">
              <Link href={""} target="_blank">
                <p className="text-xs font-bold uppercase">FAQs</p>
              </Link>
            </div>
          </div>
          <div className="space justify-center border-r-2 px-2">
            <div className="items-center">
              <Link href={""} target="_blank">
                <p className="text-xs font-bold uppercase">Help</p>
              </Link>
            </div>
          </div>
          <div className="justify-center pl-2">
            <div className="flex items-center">
              <Link href={""} target="_blank">
                <p className="text-xs font-bold uppercase">Support</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-end items-center mr-14">
        <div className="flex justify-end">
          <div className="flex items-center space-x-4">
            {icons.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
