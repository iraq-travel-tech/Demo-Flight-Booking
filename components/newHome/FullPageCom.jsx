import React, { useEffect, useRef, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export const FullPageCom = ({ setFrom, setTo, From, To, setShowFullPage }) => {
  const [airports, setAirports] = useState(null);
  const [TextFiledFocued, setTextFiledFocued] = useState(null);

  const FromRef = useRef();
  const ToRef = useRef();

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch(
          `https://api.sindibad.iq/api/v1.0/shera/airport/elastic-autocomplete?query=${
            TextFiledFocued === "from" ? From : To
          }`
        );
        const data = await response.json();
        setAirports(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (From || To) {
      fetchAirports();
    }
  }, [From, To]);

  useEffect(() => {
    FromRef.current.focus();
  }, []);

  return (
    <motion.div
      animate={{
        top: [300, 0],
        opacity: [0, 1],
      }}
      exit={{
        top: 300,
        opacity: 0,
      }}
      transition={{
        type: "just",
      }}
      className="w-full dark:bg-zinc-900 dark:text-white left-[50%] h-screen max-w-2xl -translate-x-[50%] fixed z-50 flex flex-col bg-white px-5"
    >
      <nav className="justify-between text-lg items-center py-3 border-b border-zinc-300 flex">
        <div className="capitalize">Select your trip</div>

        <div
          onClick={() => setShowFullPage(false)}
          className="w-10 h-10 cursor-pointer hover:bg-zinc-200 active:scale-95 transition-all bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"
        >
          <MdOutlineClose />
        </div>
      </nav>

      <div className="flex relative z-20 flex-col gap-3">
        <div className="relative flex items-center p-4 rounded  mt-5">
          <input
            onFocus={() => {
              setTextFiledFocued("from");
            }}
            ref={FromRef}
            value={From.text}
            onChange={(e) => setFrom(e.target.value)}
            type="search"
            className="absolute border border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700  px-2 pl-10 text- top-0 rounded left-0 w-full h-full"
            placeholder="From"
          />
          <IoMdAirplane
            size={20}
            className="fill-zinc-400 -ml-1 relative z-20 rotate-180"
          />
        </div>
        <div className="relative flex items-center p-4 rounded  ">
          <input
            ref={ToRef}
            onFocus={() => {
              setTextFiledFocued("to");
            }}
            value={To.text}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            className="absolute border border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700  px-2 pl-10 text- top-0 rounded left-0 w-full h-full"
            type="search"
            placeholder="To"
          />
          <HiLocationMarker
            size={20}
            className="fill-zinc-400 -ml-1 relative z-20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 my-4 h-full overflow-y-scroll">
        <div className="sticky top-0 left-0 w-full p-3 font-bold capitalize dark:bg-zinc-800 bg-zinc-100 border-t border-zinc-400">
          suggestions
        </div>
        <AnimatePresence>
          {airports &&
            airports.result.items.map((i, index) => (
              <motion.button
                layout
                animate={{
                  opacity: [0, 1],
                }}
                exit={{
                  opacity: [1, 0],
                }}
                onClick={() => {
                  if (TextFiledFocued === "from") {
                    setFrom({
                      text: `${i.name}`,
                      code: i.iataCode,
                    });
                  }
                  if (TextFiledFocued === "to") {
                    setTo({
                      text: `${i.name}`,
                      code: i.iataCode,
                    });
                  }
                }}
                key={`${index}-${i.displayName}`}
                className="py-3 gap-3 border-b px-2 items-center flex justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 relative "
              >
                <div className="flex gap-3 items-center ">
                  <div className="self-start">
                    <FaPlaneDeparture size={22} className="fill-blue-600" />
                  </div>
                  <div className="flex text-left flex-col">
                    <div className="font-bold truncate">{i.displayName}</div>
                    <div className="text-xs text-zinc-300">
                      {i.countryDisplayName} - {i.cityName}
                    </div>
                  </div>
                </div>

                <div className="rounded bg-blue-600 text-white p-2 w-max h-max font-bold text-xs">
                  {i.iataCode}
                </div>
              </motion.button>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};