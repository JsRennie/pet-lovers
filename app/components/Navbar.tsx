import React from "react";
import Link from "next/link";

const menu = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Service",
    page: "service",
  },
  {
    label: "Price",
    page: "price",
  },
  {
    label: "Booking",
    page: "booking",
  },
  {
    label: "Pages",
    page: "pages",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  return (
    <div className="bg-black h-14 flex items-center w-screen">
      <div className="text-white mx-14 flex space-x-6">
        {menu.map((item, index) => (
          //to implement react-scroll- after fixing its error
          <Link
            key={index}
            href={item.page}
            // activeClass="active"
            // spy={true}
            // smooth={true}
            // offset={-100}
            // duration={500}
            className="hover:text-orange-500"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href={""} target="_black" className="ml-auto mr-14">
        <div className="bg-orange-500 uppercase text-xs text-white rounded h-8 p-2  hover:bg-orange-700">
          get quote
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
