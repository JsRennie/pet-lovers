import React from "react";
import { FaCat, FaPaw } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";

const WhySection = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-row w-full h-96 mx-14">
        <div className="w-2/5 h-full flex bg-why bg-no-repeat bg-center bg-cover"></div>
        <div className="w-3/5 ml-8 pt-14">
          <h2 className="text-green-500 font-bold">Why Choose Us?</h2>
          <h1 className="text-4xl font-bold text-orange-500 pt-2">
            Special Care <span className="text-black">On Pets</span>
          </h1>
          <p className=" w-3/4 opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            optio, totam repellendus laboriosam praesentium rem at. Quod
            obcaecati maiores id asperiores nihil nulla omnis dignissimos
            tempora totam. Facere quo, vero esse ipsum corrupti odio non odit.
          </p>
          <div className="w-full flex flex-row mt-6">
            <div className="w-1/2">
              <div className="flex items-center">
                <FaCat size={46} color="green" className="opacity-60" />
                <span className="text-sm font-bold pl-2">
                  Best In The Industry
                </span>
              </div>
              <div className="flex items-center mt-4">
                <FaPaw size={46} color="green" className="opacity-60" />
                <span className="text-sm font-bold pl-2">Special Care</span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-1/2">
                <div className="flex items-center">
                  <GiHealthNormal
                    size={46}
                    color="green"
                    className="opacity-60"
                  />
                  <span className="text-sm font-bold pl-2">
                    Emergency Services
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <MdSupportAgent
                    size={46}
                    color="green"
                    className="opacity-60"
                  />
                  <span className="text-sm font-bold pl-2">
                    Customer Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
