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
    if (Body.contains("dark")) {
      Body.remove("dark");
      setDarkTheme(false);
    } else {
      Body.add("dark");
      setDarkTheme(true);
    }
  };
  return (
    <div className="fixed w-full left-[50%] max-w-2xl -translate-x-[50%] top-0  z-40">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl"></div>
        <div
          onClick={SwitchTheme}
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full"
        >
          {!DarkTheme ? (
            <HiOutlineMoon color="white" size={28} />
          ) : (
            <IoIosSunny color="white" size={28} />
          )}
        </div>
      </nav>
    </div>
  );
}
