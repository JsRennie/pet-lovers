import React from "react";
import {
  GiDogHouse,
  GiSniffingDog,
  GiSittingDog,
  GiJumpingDog,
} from "react-icons/gi";

const BookingSection = () => {
  return (
    <section className="bg-slate-200">
      <div className="flex">
        <div className="bg-orange-500 w-1/4 h-80 flex justify-center items-center ml-14">
          <div className="py-6">
            <form action="submit">
              <label
                htmlFor="name"
                className="text-white text-xs font-normal block"
              >
                Your Name
              </label>
              <input type="text" className="rounded w-full" />
              <label
                htmlFor="email"
                className="text-white text-xs font-normal block"
              >
                Your Email
              </label>
              <input type="email" className="rounded w-full" />
              <label
                htmlFor="date"
                className="text-white text-xs font-normal block"
              >
                Reservation Date
              </label>
              <input type="date" className="rounded w-full" />
              <label
                htmlFor="name"
                className="text-white text-xs font-normal block"
              >
                Reservation Time
              </label>
              <input type="time" className="rounded w-full" />
              <label
                htmlFor="name"
                className="text-white text-xs font-normal block"
              >
                Enter Service
              </label>
              <input type="text" className="rounded w-full" />
              <button className="bg-black text-white mt-4 p-2 rounded-md block w-full">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div className="w-3/4 ml-6 mr-14">
          <article>
            <h2 className="text-sm text-green-500 font-bold mt-6">
              Going For Vacation ?
            </h2>
            <h1 className="font-bold text-4xl">
              Book For
              <span className="text-orange-500"> Your Pet</span>
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic
            earum commodi eum necessitatibus vero voluptate doloribus possimus
            dolorum asperiores explicabo vel, porro laborum excepturi fugit
            similique molestiae consequuntur aliquid?
          </article>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex items-center">
              <GiDogHouse size={24} color="green" />
              <div className="ml-2">
                <span className="text-xs font-bold">Pet Boarding</span>
                <p className="w-full text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eius facere velit?
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <GiSittingDog size={24} color="green" />
              <div className="ml-2">
                <span className="text-xs font-bold">Pet Grooming</span>
                <p className="w-full text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eius facere velit?
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <GiSniffingDog size={24} color="green" />
              <div className="ml-2">
                <span className="text-xs font-bold">Pet Feeding</span>
                <p className="w-full text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eius facere velit?
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <GiJumpingDog size={24} color="green" />
              <div className="ml-2">
                <span className="text-xs font-bold">Pet Training</span>
                <p className="w-full text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eius facere velit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
