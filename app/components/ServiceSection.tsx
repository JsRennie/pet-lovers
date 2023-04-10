import React from "react";
import Link from "next/link";
import {
  GiDogHouse,
  GiSniffingDog,
  GiSittingDog,
  GiJumpingDog,
  GiBalloonDog,
  GiDogBowl,
} from "react-icons/gi";

const ServiceSection = () => {
  return (
    <section className="bg-slate-200 pb-10">
      <div className="text-center pt-8">
        <h2 className="text-green-500 font-bold">Our Services</h2>
        <h1 className="text-orange-500 font-bold text-4xl">
          Premium <span className="text-black">Pet Services</span>
        </h1>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-10 mx-14 mt-8">
        <div className="flex justify-center">
          <div className="bg-white w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiDogHouse size={64} color="green" className="" />
              <span className="text-lg font-bold">Pet Boarding</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={"#"} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white mx-10 w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiSniffingDog size={64} color="green" className="pt-4" />
              <span className="text-lg font-bold">Pet Feeding</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={""} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiSittingDog size={64} color="green" className="pt-4" />
              <span className="text-lg font-bold">Pet Grooming</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={""} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiBalloonDog size={64} color="green" className="pt-4" />
              <span className="text-lg font-bold">Pet Training</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={""} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white mx-10 w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiJumpingDog size={64} color="green" className="pt-4" />
              <span className="text-lg font-bold">Pet Exercise</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={""} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white w-80 h-96">
            <div className="flex flex-col items-center justify-center">
              <GiDogBowl size={64} color="green" className="pt-4" />
              <span className="text-lg font-bold">Pet Treatment</span>
              <p className="font-semibold opacity-80 px-6 pt-4 pb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium distinctio laboriosam dolorum necessitatibus quae
                dolor vitae delectus nesciunt repellat tempora nisi assumenda
                iure totam beatae vel neque eos, repudiandae maiores.
              </p>
              <Link href={""} target="_blank">
                <span className="text-sm text-orange-500 font-bold uppercase hover:text-green-500">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
