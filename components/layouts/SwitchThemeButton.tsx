"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

const SwitchThemeButton: React.FC<Props> = () => {
  const [DarkTheme, setDarkTheme] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("isDarkTheme") || "false")
      : false
  );

  const SwitchTheme = () => {
    const newDarkTheme = !DarkTheme;
    localStorage.setItem("isDarkTheme", JSON.stringify(newDarkTheme));
    setDarkTheme(newDarkTheme);
  };

  useEffect(() => {
    const Body =
      typeof window !== "undefined" && window.document.body.classList;
    if (DarkTheme) {
      Body.add("dark");
    } else {
      Body.remove("dark");
    }
  }, [DarkTheme]);

  return (
    <AnimatePresence>
      <motion.div
        whileTap={{
          rotate: [0, 200],
          opacity: [1, 0],
        }}
        onClick={SwitchTheme}
        className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full"
      >
        {!DarkTheme ? (
          <HiOutlineMoon color="white" size={28} />
        ) : (
          <IoIosSunny color="white" size={28} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwitchThemeButton;

// FIX LATER:
// Warning: Prop `d` did not match. Server: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" Client: "M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4zM256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4zM125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4zM448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5zM359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5zM130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"
