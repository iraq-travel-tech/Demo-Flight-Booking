import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlightOptions({
  TripType,
  setTripType,
  tripType,
  tripClass,
  passengerNumber,
  setFromTrip,
  setToTrip,
  FromTrip,
  ToTrip,
}) {
  return (
    <>
      <div className="sm:-top-12 -top-[5.6em] relative z-20">
        <div className="xl:max-w-6xl lg:max-w-4xl sm:max-w-3xl sm:py-4 sm:hidden p-3 sm:mx-auto mx-7 bg-white relative rounded-xl shadow-xl flex gap-4">
          {["Round Trip", "one way trip"].map((i, index) => (
            <div
              onClick={() => setTripType(index)}
              key={index}
              className={`py-2 px-2 text-black text-center w-full rounded-xl cursor-pointer bg-white transition-all relative ${
                index === TripType && "!text-white"
              }`}
            >
              <span className="z-20 relative">{i}</span>
              {index === TripType && (
                <motion.div
                  layoutId="byrebibnebiwb"
                  className="bg-blue-600 rounded-xl absolute inset-0 z-10"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="xl:max-w-6xl sm:mt-0 mt-3 lg:max-w-4xl sm:max-w-3xl sm:py-4 px-4 py-5 sm:mx-auto mx-7 bg-white relative rounded-xl shadow-xl sm:gap-2 flex flex-col">
          <div className="flex sm:flex-col flex-col-reverse gap-3">
            <div className="flex mt-5 sm:mt-0   sm:flex-row flex-col gap-5">
              <select className="bg-zinc-100 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer sm:block hidden">
                {tripType.map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select className="bg-zinc-100 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer">
                {tripClass.map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select className="bg-zinc-100 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer">
                {passengerNumber.map((i, index) => (
                  <option key={index} value={i}>
                    {i} passenger
                  </option>
                ))}
              </select>
            </div>

            <div className="flex md:flex-row flex-col gap-5">
              <div className="flex sm:flex-row flex-col flex-1 gap-5">
                <input
                  className="flex-1 p-3 bg-zinc-100 border rounded-xl text-lg"
                  placeholder="From"
                  onChange={(e) => setFromTrip(e.target.value)}
                  value={FromTrip}
                />
                <input
                  className="flex-1 p-3 bg-zinc-100 border rounded-xl text-lg"
                  placeholder="To"
                  onChange={(e) => setToTrip(e.target.value)}
                  value={ToTrip}
                />
              </div>
              <div className="sm:flex hidden flex-1 gap-5">
                <input
                  className="flex-1 p-3 bg-zinc-100 border rounded-xl text-lg"
                  placeholder="Date"
                />
              </div>
            </div>
          </div>

          <button className="sm:w-max py-2 px-4 mt-4 rounded-xl font-bold active:scale-95 active:bg-blue-700 transition-all bg-blue-600 text-white">
            Search for flights
          </button>
        </div>
      </div>
    </>
  );
}
