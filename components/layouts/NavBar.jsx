import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";

export default function NavBar() {
  const [OpenSide, setOpenSide] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [DarkTheme, setDarkTheme] = useState(false);
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

  const SwitchTheme = () => {
    const Body = window.document.body.classList;
    Body.contains("dark") ? Body.remove("dark") : Body.add("dark");




    
  };

  return (
    <div className="fixed top-0 left-0 w-full  z-50">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl"></div>
        <div
          onClick={SwitchTheme}
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full"
        >
          {DarkTheme ? (
            <HiOutlineMoon color="white" size={28} />
          ) : (
            <IoIosSunny color="white" size={28} />
          )}
        </div>
      </nav>
    </div>
  );
}
