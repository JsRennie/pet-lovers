import React from "react";
import { RiAdminFill } from "react-icons/ri";
import {
  TbRectangleVerticalFilled,
  TbMessageCircle2Filled,
} from "react-icons/tb";

const BlogSection = () => {
  return (
    <section className="pb-10 mb-2">
      <div className="text-center pt-8 mt-8">
        <h2 className="text-green-500 font-bold">Blog</h2>
        <h1 className="text-orange-500 text-4xl font-bold pt-2">
          Updates <span className="text-black">From Our Newsletter</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
        <div className="bg-slate-200 rounded-lg w-80 h-96">
          <div className="w-full h-1/2 bg-blog bg-no-repeat bg-center bg-cover rounded-t-lg"></div>
          <div className="w-full h-fit">
            <p className="text-sm font-semibold px-3 pt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex p-2 items-center text-xs">
              <RiAdminFill size={14} color="black" className="pr-1" /> {"Admin"}
              <TbRectangleVerticalFilled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"Web Design"}
              <TbMessageCircle2Filled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"15"}
            </div>
            <p className="text-sm opacity-60 pt-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              natus corporis provident amet, molestiae placeat vel saepe
              laborum!
            </p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg w-80 h-96 mx-6">
          <div className="w-full h-1/2 bg-blog1 bg-no-repeat bg-center bg-cover rounded-t-lg"></div>
          <div className="w-full h-fit">
            <p className="text-sm font-semibold px-3 pt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex p-2 items-center text-xs">
              <RiAdminFill size={14} color="black" className="pr-1" /> {"Admin"}
              <TbRectangleVerticalFilled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"Web Design"}
              <TbMessageCircle2Filled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"15"}
            </div>
            <p className="text-sm opacity-60 pt-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              natus corporis provident amet, molestiae placeat vel saepe
              laborum!
            </p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg w-80 h-96">
          <div className="w-full h-1/2 bg-blog2 bg-no-repeat bg-center bg-cover rounded-t-lg"></div>
          <div className="w-full h-fit">
            <p className="text-sm font-semibold px-3 pt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex p-2 items-center text-xs">
              <RiAdminFill size={14} color="black" className="pr-1" /> {"Admin"}
              <TbRectangleVerticalFilled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"Web Design"}
              <TbMessageCircle2Filled
                size={14}
                color="black"
                className="pr-1 ml-2"
              />{" "}
              {"15"}
            </div>
            <p className="text-sm opacity-60 pt-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              natus corporis provident amet, molestiae placeat vel saepe
              laborum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
