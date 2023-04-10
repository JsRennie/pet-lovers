import React from "react";

const Info = () => {
  return (
    <section className="flex h-16 mx-14">
      <div className="flex items-center w-full justify-between">
        <div className="flex">
          <h1 className="text-4xl">
            Pet<span className="text-orange-600">Lover</span>
          </h1>
        </div>
        <div className="flex items-center justify-end ">
          <div className="border-r-2 flex items-center mx-4">
            <div className="text-center pr-2">
              <h2 className="text-sm font-bold">Opening Hours</h2>
              <p className="text-xs text-gray-500 font-medium">8:00AM-9:00PM</p>
            </div>
          </div>
          <div className="border-r-2 flex items-center pr-2">
            <div className="text-center">
              <h2 className="text-sm font-bold">Email Us</h2>
              <p className="text-xs text-gray-500 font-medium">
                info@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center pl-2">
            <div className="text-center">
              <h2 className="text-sm font-bold">Contact Us</h2>
              <p className="text-xs text-gray-500 font-medium">+254000000001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
