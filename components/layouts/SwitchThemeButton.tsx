"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

const SwitchThemeButton: React.FC<Props> = () => {
  const [DarkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    setDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    const Body = window.document.body.classList;
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

