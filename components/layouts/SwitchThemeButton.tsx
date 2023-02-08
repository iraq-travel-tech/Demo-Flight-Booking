"use client";

import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

const SwitchThemeButton: React.FC<Props> = () => {
  const [DarkTheme, setDarkTheme] = useState(true);

  const SwitchTheme = () => {
    if (DarkTheme) {
      localStorage.setItem("isDarkTheme", JSON.stringify(false));
      setDarkTheme(false);
    } else {
      localStorage.setItem("isDarkTheme", JSON.stringify(true));
      setDarkTheme(true);
    }
  };

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
