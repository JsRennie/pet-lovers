import React from "react";
import { BiCheckDouble } from "react-icons/bi";

const AboutSection = () => {
  return (
    <section className="mx-14 mt-8 mb-10">
      <div className="flex">
        <div className="w-3/4">
          <div className="w-5/6">
            <h2 className="text-green-500 font-bold">About Us</h2>
            <h1 className="text-4xl font-bold text-orange-500 pt-2">
              Boarding <span className="text-black">&</span>{" "}
              <span className="text-green-500">Daycare</span>
            </h1>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, earum hic? Error quia ducimus at officiis, illo eius,
              nihil repellendus dicta nulla laudantium iste.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              provident similique est aliquam natus facilis soluta blanditiis
              exercitationem, minus illo, quasi inventore alias corrupti maiores
              accusantium. Expedita.
            </p>
            <div className="text-sm font-bold">
              <BiCheckDouble size={20} color="green" />
              {"Best In The Industry "}
              <BiCheckDouble size={20} color="green" />
              {"Emergency Services "}
              <BiCheckDouble size={20} color="green" />
              {"24/7 Customer Support "}
            </div>
            <button className="bg-orange-500 rounded-md font-bold text-white text-xs p-2 mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <div className="w-full h-40 bg-dog bg-no-repeat bg-center bg-cover"></div>
          <div className="flex w-full">
            <div className="w-1/2 h-40 bg-pet bg-no-repeat bg-center bg-cover"></div>
            <div className="w-1/2 h-40 bg-cat bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
