import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import TripClassType from "./TripClassType";

export default function Passengers({
  setShowPassengerComponent,
  setFlightPassengers,
  FlightClass,
  setFlightClass,
}) {
  const [Adults, setAdults] = useState(1);
  const [Children, setChildren] = useState(0);
  const [Babies, setBabies] = useState(0);

  const Add = (passenger, setPassenger) => {
    setPassenger(Math.max(0, passenger + 1));
  };

  const Minus = (passenger, setPassenger) => {
    setPassenger(Math.max(0, passenger - 1));
  };

  const handleWindowClose = () => {
    setFlightPassengers({
      Adults,
      Children,
      Babies,
    });

    setShowPassengerComponent(false);
  };

  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "just",
        }}
        onClick={handleWindowClose}
        className="bg-black/50 h-screen w-full top-0 left-0 fixed z-30"
      ></motion.div>
      <motion.div
        animate={{
          bottom: [-340, 0],
          opacity: [0, 1],
        }}
        exit={{
          bottom: -340,
          opacity: 0,
        }}
        className="w-full bottom-0 max-w-2xl -translate-x-[50%] left-[50%] fixed z-50 flex flex-col dark:bg-zinc-900 dark:text-white bg-white px-5 py-3 rounded-t-xl"
      >
        <nav className="justify-between text-lg items-center py-3 border-b  border-zinc-300 flex">
          <div className="capitalize">Passengers</div>

          <div
            onClick={handleWindowClose}
            className="w-10 dark:bg-zinc-800 h-10 cursor-pointer hover:shadow-xl hover:scale-105 hover:bg-zinc-200 active:scale-95 transition-all bg-white rounded-full flex items-center justify-center"
          >
            <MdOutlineClose />
          </div>
        </nav>

        <div className="flex mt-5 flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-lg font-bold">Adults</div>
              <div className="text-zinc-400 text-sm">
                more than 12 years old
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => Add(Adults, setAdults)}
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
              >
                +
              </button>
              <p>{Adults}</p>
              <button
                onClick={() => {
                  Adults > 1 && Minus(Adults, setAdults);
                }}
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
              >
                -
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex flex-col">
              <div className="text-lg font-bold">Children</div>
              <div className="text-zinc-400 text-sm">2-12 years old</div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
                onClick={() => Add(Children, setChildren)}
              >
                +
              </button>

              <p>{Children}</p>
              <button
                onClick={() => Minus(Children, setChildren)}
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
              >
                -
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex flex-col">
              <div className="text-lg font-bold">Babies</div>
              <div className="text-zinc-400 text-sm">0-2 years old</div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => Add(Babies, setBabies)}
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
              >
                +
              </button>
              <p>{Babies}</p>
              <button
                onClick={() => Minus(Babies, setBabies)}
                className="w-10 h-10 bg-blue-600 text-white font-bold rounded active:scale-95 transition-all active:bg-blue-700 text-lg flex items-center justify-center"
              >
                -
              </button>
            </div>
          </div>

          <div className="mt-10">
            <TripClassType
              FlightClass={FlightClass}
              setFlightClass={setFlightClass}
            />
          </div>
          <button
            onClick={handleWindowClose}
            className="bg-blue-600 rounded p-2 font-bold mt-10 active:scale-95 active:bg-blue-700 text-white transition-all"
          >
            ok
          </button>
        </div>
      </motion.div>
    </>
  );
}
