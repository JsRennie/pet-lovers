import React from "react";
import Link from "next/link";
import { TiSocialTwitter, TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const socials = [
  {
    icon: <TiSocialTwitter size={30} color="orange" />,
    href: "https://twitter.com",
  },
  {
    icon: <TiSocialLinkedinCircular size={30} color="orange" />,
    href: "https://linkedin.com",
  },
  {
    icon: <AiFillInstagram size={30} color="orange" />,
    href: "https://instagram.com",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-6">
      <div className="text-center">
        <h2 className="text-green-500 font-bold">Our Team</h2>
        <h1 className="text-4xl font-bold pt-2">
          Meet Our <span className="text-orange-500">Team Members</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="w-80 h-96 pt-4">
          <div className="w-full h-3/4 bg-lover bg-no-repeat bg-center bg-cover"></div>
          <div className="w-full h-1/4 bg-black">
            <div className="flex justify-center items-center pt-4">
              {socials.map((item, index) => (
                <Link key={index} href={item.href} target="_blank" className="">
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <p className="text-white font-bold">Mollie Ross</p>
              <span className="text-white text-xs opacity-70 font-semibold">
                Founder & CEO
              </span>
            </div>
          </div>
        </div>
        <div className="w-80 h-96 mx-10 pt-4">
          <div className="w-full h-3/4 bg-lover1 bg-no-repeat bg-center bg-cover"></div>
          <div className="w-full h-1/4 bg-black">
            <div className="flex justify-center items-center pt-4">
              {socials.map((item, index) => (
                <Link key={index} href={item.href} target="_blank" className="">
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <p className="text-white font-bold">Junifer Page</p>
              <span className="text-white text-xs opacity-70 font-semibold">
                CEO
              </span>
            </div>
          </div>
        </div>
        <div className="w-80 h-96 pt-4">
          <div className="w-full h-3/4 bg-lover2 bg-no-repeat bg-center bg-cover"></div>
          <div className="w-full h-1/4 bg-black">
            <div className="flex justify-center items-center pt-4">
              {socials.map((item, index) => (
                <Link key={index} href={item.href} target="_blank" className="">
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <p className="text-white font-bold">kate Glover</p>
              <span className="text-white text-xs opacity-70 font-semibold">
                Doctor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
