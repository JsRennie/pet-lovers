import React from "react";
import { GiCancel, GiConfirmed } from "react-icons/gi";

const PricingSection = () => {
  return (
    <section className="w-screen bg-slate-200 py-10">
      <h1 className="text-green-500 font-bold text-center mb-4">
        Pricing Plan
      </h1>
      <h2 className="text-4xl font-bold text-black pt-2 text-center">
        Choose The <span className="text-orange-500">Best Plan</span>
      </h2>
      <div className="flex flex-row justify-center mt-10">
        <div className="bg-white w-80 h-96">
          <div className="w-full h-2/5 bg-price bg-no-repeat bg-center bg-cover">
            <p className="text-4xl text-orange-500 text-center">Basic</p>
            <p className="text-4xl text-white text-center">
              $49 <span className="text-sm">/m</span>
            </p>
          </div>
          <div>
            <div className="w-full h-3/5 mt-10 flex justify-center text-center pb-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Feeding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Boarding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiCancel size={24} color="red" />
                <span className="text-slate-500 pl-3">Spar & Grooming</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiCancel size={24} color="red" />
                <span className="text-slate-500 pl-3">Veterinary Service</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="bg-orange-500 text-white text-center font-semibold flex items-center justify-center h-10">
            Signup Now
          </div>
        </div>
        <div className="bg-white w-80 h-96 mx-6">
          <div className="w-full h-2/5 bg-price1 bg-no-repeat bg-center bg-cover">
            <p className="text-4xl text-green-500 text-center">Standard</p>
            <p className="text-4xl text-white text-center">
              $349 <span className="text-sm">/m</span>
            </p>
          </div>
          <div>
            <div className="w-full h-3/5 mt-10 flex justify-center text-center pb-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Feeding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Boarding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Spar & Grooming</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiCancel size={24} color="red" />
                <span className="text-slate-500 pl-3">Veterinary Service</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="bg-green-500  text-white text-center font-semibold flex items-center justify-center h-10">
            Signup Now
          </div>
        </div>
        <div className="bg-white w-80 h-96">
          <div className="w-full h-2/5 bg-price2 bg-no-repeat bg-center bg-cover">
            <p className="text-4xl text-orange-500 text-center">Premium</p>
            <p className="text-4xl text-white text-center">
              $349 <span className="text-sm">/m</span>
            </p>
          </div>
          <div>
            <div className="w-full h-3/5 mt-10 flex justify-center text-center pb-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Feeding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Boarding</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Spar & Grooming</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-3/5 flex justify-center text-center py-2">
              <div className="flex">
                <GiConfirmed size={24} color="green" />
                <span className="text-slate-500 pl-3">Veterinary Service</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="bg-orange-500  text-white text-center font-semibold flex items-center justify-center h-10">
            Signup Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
