"use client";

import { motion } from "framer-motion";

export default function TripType({ Texts, setFlightClass, FlightClass }) {
  return (
    <div className="rounded-xl text-sm dark:bg-zinc-800 bg-zinc-100 p-2 shadow-xl flex gap-2">
      {[
        {
          item: Texts?.economy,
          name: "economy",
        },
        {
          item: Texts?.business,
          name: "business",
        },
      ].map((i, index) => (
        <button
          className={`p-2 relative flex-1`}
          key={i.name + index}
          onClick={() => setFlightClass(i.name)}
        >
          <span
            className={`relative z-10 capitalize ${
              FlightClass === i.name && "!text-white"
            } text-black dark:text-white transition-all font-bold`}
          >
            {i.item}
          </span>
          {FlightClass === i.name && (
            <motion.div
              layoutId="352367265"
              className={`absolute w-full h-full rounded-xl top-0 left-0 ${
                FlightClass === i.name && "bg-blue-600"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
