import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function NavBar() {
  const [OpenSide, setOpenSide] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full text-white z-50">
      <nav
        className="
      xl:max-w-6xl 
      lg:max-w-4xl
      sm:max-w-3xl 
      sm:py-4
      sm:px-4
      py-5
      px-10
      mx-auto flex justify-between items-center"
      >
        <Link href="/" className="font-extrabold z-50">
          Bonvoyage
        </Link>

        <div
          className={`flex 
          sm:flex-row 
          sm:relative
          sm:h-max
          sm:w-max
          sm:justify-start
          sm:bg-blue-600/0
          sm:text-base
          sm:right-0
          text-lg
          bg-blue-600
          justify-center
          z-40
          h-full
          w-full
          top-0
          -right-[100vh]
          ${OpenSide && "!right-0"}
          transition-all
          fixed
          flex-col
          gap-5 
          items-center`}
        >
          {["flights", "hotels", "cars", "packages"].map((i, index) => (
            <Link className="capitalize" key={index} href="/">
              {i}
            </Link>
          ))}
          <div className="flex flex-col sm:hidden gap-5 mt-10">
            {["about", "login"].map((i, index) => (
              <Link className="capitalize" key={index} href="/">
                {i}
              </Link>
            ))}
          </div>
        </div>
        <div className="sm:flex hidden gap-10">
          {["about", "login"].map((i, index) => (
            <Link className="capitalize" key={index} href="/">
              {i}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpenSide(!OpenSide)}
          className="z-40 flex mt-1 relative sm:hidden"
        >
          {OpenSide ? <RxCross2 size={30} /> : <BiMenu size={30} />}
        </button>
      </nav>
    </div>
  );
}
