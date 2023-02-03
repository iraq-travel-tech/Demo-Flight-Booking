import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

export const FullPageCom = ({ setFrom, setTo, From, To, setCloseFullPage }) => {
  const [airports, setAirports] = useState(null);
  const [TextFiledFocued, setTextFiledFocued] = useState(null);

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
        console.log(airports);
      } catch (error) {
        console.error(error);
      }
    };
    if (From || To) {
      fetchAirports();
    }
  }, [From, To]);

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
      className="w-full left-[50%] h-screen max-w-2xl -translate-x-[50%] fixed z-50 flex flex-col bg-white px-5"
    >
      <nav className="justify-between text-lg items-center py-3 border-b border-zinc-300 flex">
        <div className="capitalize">Select your trip</div>

        <div
          onClick={() => setCloseFullPage(false)}
          className="w-10 h-10 cursor-pointer hover:bg-zinc-200 active:scale-95 transition-all bg-white rounded-full flex items-center justify-center"
        >
          <MdOutlineClose />
        </div>
      </nav>

      <div className="flex relative z-20 flex-col gap-3">
        <div className="relative flex items-center p-4 rounded border border-zinc-300 mt-5">
          <input
            onFocus={() => {
              setTextFiledFocued("from");
              //   setFrom({ text: "", code: "" });
            }}
            value={From.text}
            onChange={(e) => setFrom(e.target.value)}
            type="search"
            className="absolute px-3 pl-12 text-lg top-0 rounded left-0 w-full h-full"
            placeholder="From"
          />
          <IoMdAirplane
            size={20}
            className="fill-zinc-400 relative z-20 rotate-180"
          />
        </div>
        <div className="relative flex items-center p-4 rounded border border-zinc-300 ">
          <input
            onFocus={() => {
              setTextFiledFocued("to");
              //   setTo({ text: "", code: "" });
            }}
            value={To.text}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            className="absolute px-3 pl-12 text-lg top-0 rounded left-0 w-full h-full"
            type="search"
            placeholder="To"
          />
          <HiLocationMarker size={20} className="fill-zinc-400 relative z-20" />
        </div>
      </div>

      <div className="flex flex-col gap-1 my-4 h-full overflow-y-scroll">
        <div className="sticky top-0 left-0 w-full p-3 font-bold capitalize bg-zinc-200 border-t border-zinc-400">
          suggestions
        </div>
        {airports &&
          airports.result.items.map((i, index) => (
            <button
              onClick={() => {
                if (TextFiledFocued === "from") {
                  setFrom({
                    text: `${i.countryDisplayName} - ${i.cityName}`,
                    code: i.iataCode,
                  });
                }
                if (TextFiledFocued === "to") {
                  setTo({
                    text: `${i.countryDisplayName} - ${i.cityName}`,
                    code: i.iataCode,
                  });
                }
              }}
              key={`${index}-${i.displayName}`}
              className="py-3 gap-3 border-b px-2 items-center flex justify-between hover:bg-zinc-100 "
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
            </button>
          ))}
      </div>
    </motion.div>
  );
};
