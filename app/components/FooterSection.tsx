import React from "react";
import Link from "next/link";
import { TbLocationFilled, TbPhoneCall, TbMail } from "react-icons/tb";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { IoIosArrowForward, IoMdArrowRoundUp } from "react-icons/io";

const FooterSection = () => {
  return (
    <footer className="bg-stone-900 pt-12 px-14">
      <div className="w-full flex">
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-orange-500">
            Pet <span className="text-white">Lover</span>
          </h1>
          <p className="text-white text-md opacity-75 font-bold pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            ipsam ut quis! Quam consectetur repellat, molestias voluptatum
            natus, amet animi, non adipisci optio obcaecati possimus in rerum.
            Possimus repellendus eveniet numquam excepturi vel. Perferendis
            ratione placeat similique odio natus consectetur.
          </p>
        </div>
        <div className="w-3/4 ml-16 text-white">
          <div className="flex flex-row  justify-evenly">
            <div>
              <h2 className="text-orange-500 font-bold text-lg">
                Get In Touch
              </h2>
              <div className="pt-2 flex items-center">
                <TbLocationFilled size={20} color="white" />
                <p className="text-white text-sm pl-2">Location,City,Country</p>
              </div>
              <div className="pt-2 flex items-center my-2">
                <TbPhoneCall size={20} color="white" />
                <p className="text-white text-sm pl-2">+254000000009</p>
              </div>
              <div className="pt-2 flex items-center">
                <TbMail size={20} color="white" />
                <p className="text-white text-sm pl-2">design@rennie.com</p>
              </div>
              <div className="flex pt-2">
                <TiSocialLinkedinCircular size={24} color="orange" />
                <AiFillInstagram size={24} color="orange" />
                <RiFacebookFill size={24} color="orange" />
                <TiSocialTwitter size={24} color="orange" />
              </div>
            </div>
            <div>
              <h2 className="text-orange-500 font-bold text-lg">
                Popular Links
              </h2>
              <Link href={"#"}>
                <div className="pt-2 flex items-center">
                  <IoIosArrowForward size={20} color="white" />
                  <p className="text-white text-sm hover:text-orange-500">
                    Home
                  </p>
                </div>
                <div className="pt-2 flex items-center">
                  <IoIosArrowForward size={20} color="white" />
                  <p className="text-white text-sm hover:text-orange-500">
                    About Us
                  </p>
                </div>
                <div className="pt-2 flex items-center">
                  <IoIosArrowForward size={20} color="white" />
                  <p className="text-white text-sm hover:text-orange-500">
                    Our Services
                  </p>
                </div>
                <div className="pt-2 flex items-center">
                  <IoIosArrowForward size={20} color="white" />
                  <p className="text-white text-sm hover:text-orange-500">
                    Our Team
                  </p>
                </div>
                <div className="pt-2 flex items-center">
                  <IoIosArrowForward size={20} color="white" />
                  <p className="text-white text-sm hover:text-orange-500">
                    Contact Us
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <h2 className="text-orange-500 font-bold text-lg">News Letter</h2>
              <div>
                <form action="submit">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="h-8 w-52 rounded pl-2"
                  />
                  <div className="bg-orange-500 mt-2 text-white text-center py-2 text-sm font-semibold h-8 w-52 rounded">
                    Submit Now
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-8">
        <Link href={"#"}>
          <IoMdArrowRoundUp
            size={36}
            color="orange"
            className="hover:-translate-y-6 hover:scale-125"
          />
        </Link>
      </div>
      <div className="text-white font-bold opacity-90 text-center">
        &#169;PetLovers.AllRights Reserved Design@Renson
      </div>
    </footer>
  );
};

export default FooterSection;
