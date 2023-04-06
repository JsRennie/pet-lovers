import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="bg-slate-200 pb-12">
      <div className="text-center pt-8 mt-8">
        <h2 className="text-green-500 font-bold">Testimonials</h2>
        <h1 className="text-4xl font-bold pt-2">
          Our Clients <span className="text-orange-500">Says</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center pt-8">
        <div className="bg-white w-96 h-44 rounded-md drop-shadow-xl flex">
          <div>
            <div className="flex">
              <div className="w-24 h-24 rounded-tl-lg bg-profile bg-no-repeat bg-center bg-cover"></div>
              <div>
                <p className="font-bold text-lg pl-4 pt-4">Christopher Chu</p>
                <span className="opacity-70 pl-4">Professor</span>
              </div>
            </div>
            <div className="text-xs font-semibold opacity-80 pl-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni
              officia itaque maiores. Vitae molestiae temporibus voluptates,
              dignissimos commodi omnis.
            </div>
          </div>
        </div>
        <div className="bg-white w-96 h-44 mx-4 rounded-md drop-shadow-xl flex">
          <div>
            <div className="flex">
              <div className="w-24 h-24 rounded-tl-lg bg-profile1 bg-no-repeat bg-center bg-cover"></div>
              <div>
                <p className="font-bold text-lg pl-4 pt-4">Alice Jones</p>
                <span className="opacity-70 pl-4">Enginner</span>
              </div>
            </div>
            <div className="text-xs font-semibold opacity-80 pl-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni
              officia itaque maiores. Vitae molestiae temporibus voluptates,
              dignissimos commodi omnis.
            </div>
          </div>
        </div>
        <div className="bg-white w-96 h-44 rounded-md drop-shadow-xl flex">
          <div>
            <div className="flex">
              <div className="w-24 h-24 rounded-tl-lg bg-profile2 bg-no-repeat bg-center bg-cover"></div>
              <div>
                <p className="font-bold text-lg pl-4 pt-4">Ali Mohammed</p>
                <span className="opacity-70 pl-4">Teacher</span>
              </div>
            </div>
            <div className="text-xs font-semibold opacity-80 pl-4 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni
              officia itaque maiores. Vitae molestiae temporibus voluptates,
              dignissimos commodi omnis.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="bg-white h-4 w-4 rounded-full"></div>
        <div className="bg-orange-500 h-4 w-4 mx-4 rounded-full"></div>
        <div className="bg-white h-4 w-4 rounded-full"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
