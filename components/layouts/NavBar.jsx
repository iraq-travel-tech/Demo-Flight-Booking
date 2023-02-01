import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function NavBar() {
  const [OpenSide, setOpenSide] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const router = useRouter();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full text-white z-50  ${
        !scrolledDown ||
        "!bg-white !text-black shadow-xl sm:py-6 sm:px-5 py-4 px-7"
      }

      ${
        router.pathname !== "/" &&
        "!bg-white !text-black shadow-xl sm:py-6 sm:px-5 py-4 px-7"
      }
      
      sm:py-4 transition-all
      sm:px-4
      py-5
      px-10`}
    >
      <nav
        className={`
        transition-all
       
        xl:max-w-6xl 
        lg:max-w-4xl
        sm:max-w-3xl 
        ${OpenSide && "!text-white sm:!text-inherit"}
        mx-auto flex justify-between items-center`}
      >
        <Link href="/" className="font-extrabold z-50">
          Travel Port
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
