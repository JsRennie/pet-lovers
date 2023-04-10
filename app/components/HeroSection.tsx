import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="">
      <div className="h-96 bg-hero bg-no-repeat bg-center bg-cover">
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="text-center">
            <p className="text-white font-semibold text-lg">
              Best Pet Services
            </p>
            <h1 className="text-white font-bold text-4xl">
              Keep Your Pet Happy
            </h1>
            <button className="bg-orange-500 font-bold text-white p-2 rounded mt-12 mr-4">
              Book Now
            </button>
            <button className="bg-green-500 font-bold p-2 rounded">
              Learn More
            </button>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-14">
            <div className="bg-orange-500 rounded w-6 ml-2">
              <IoIosArrowBack color="white" size={24} />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-14">
            <div className="bg-orange-500 rounded w-6 mr-2">
              <IoIosArrowForward color="white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
