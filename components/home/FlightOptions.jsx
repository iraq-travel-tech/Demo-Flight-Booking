import { useRef } from "react";
import { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaDownload } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Test() {
  const classes = ["bussiness", "economy"];
  const [FromTrip, setFromTrip] = useState("");
  const [ToTrip, setToTrip] = useState("");
  const [FlightClass, setFlightClass] = useState(classes[0]);
  const [Return, setReturn] = useState(false);
  const [Passengers, setPassengers] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div>
      <div className="sm:h-[10em] h-[18em] transition-all bg-blue-500 sm:rounded-b-[20%] rounded-b-3xl z-10 w-full relative">
        <img
          className="absolute sm:hidden -translate-x-[50%] w-[24em] h-[14em] top-0 left-[50%] object-cover"
          src="/images/plane.png"
        />
      </div>

      <div className="mx-auto  w-full flex justify-center px-4">
        <div className="bg-white shadow-xl sm:px-6 py-2 px-4  max-w-[30em] rounded-xl relative sm:-top-10 -top-20 z-20 w-full">
          <div className="p-2 sm:text-xl capitalize font-bold text-blue-600">
            Where would you want to fly?
          </div>
          <div className="flex mt-2 sm:mt-0 w-full flex-col gap-3">
            <InputField
              placeholder="from"
              Value={FromTrip}
              setValue={setFromTrip}
              EndIcon={FaPlaneDeparture}
            />
            <InputField
              placeholder="to"
              Value={ToTrip}
              setValue={setToTrip}
              EndIcon={FaPlaneArrival}
            />

            <div className="flex sm:gap-3">
              <input
                type="date"
                className="rounded-lg flex-1 p-2 relative border border-zinc-300  focus:outline-blue-600"
                onChange={(e) => setSelectedDate(e.target.value)}
                value={selectedDate}
              />

              <div className="flex flex-col py-2 px-4">
                <div className="text-zinc-400 text-xs mb-1">Return ?</div>

                <div
                  className="rounded-full cursor-pointer relative bg-zinc-300 h-6 p-1"
                  onClick={() => setReturn(!Return)}
                >
                  {!Return && (
                    <motion.div
                      layoutId="dropDown11232"
                      className="rounded-full absolute top-1 left-1 bg-white w-4 h-4"
                    ></motion.div>
                  )}
                  {Return && (
                    <motion.div
                      layoutId="dropDown11232"
                      className="rounded-full absolute top-1 right-1 bg-blue-600 w-4 h-4"
                    ></motion.div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Dropdown
                options={classes}
                selectedOption={FlightClass}
                setSelectedOption={setFlightClass}
              />
              <PassengersInputField
                Value={Passengers}
                setValue={setPassengers}
              />
            </div>
          </div>
          <Link
            href={`flights?from=${FromTrip}&to=${ToTrip}&passengers=${Passengers}&class=${FlightClass}&date=${selectedDate}&return=${Return}`}
            className="bg-blue-600 p-3 rounded shadow  w-full font-bold text-white active:scale-95 block text-center transition-all active:bg-blue-700 my-2 mt-4"
          >
            Find Flights
          </Link>
        </div>
      </div>
    </div>
  );
}
export function InputField({ placeholder, Value, EndIcon, setValue }) {
  const [focused, setFocused] = useState(false);
  const Input = useRef();
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        ref={Input}
        className={`w-full rounded-lg py-3 pl-5 pr-12 bg-white border-2 border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 `}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p
        className={`absolute top-3 left-5 text-zinc-400 px-1 ${
          focused || Value !== "" ? "!text-blue-600 !-top-3 !left-4" : ""
        } transition-all capitalize bg-white    `}
        onClick={() => Input.current.focus()}
      >
        {placeholder}
      </p>

      <div
        className={`absolute right-0 top-3.5 mr-4
      ${focused && "!fill-blue-600"} fill-zinc-400
      `}
      >
        <EndIcon size={21} className="fill-inherit" />
      </div>
    </div>
  );
}

export const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="w-full flex justify-between text-left rounded-lg py-2 px-4 border border-gray-300 capitalize focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {selectedOption || "Select an option"}
        <span className="ml-2 mt-1 inline-block rotate-90">
          <BsCaretDownFill
            className={`${
              open && "!-rotate-90"
            } rotate-0 transition-all fill-zinc-500`}
          />
        </span>
      </button>
      {open && (
        <ul className="mt-1 absolute w-full rounded-lg bg-white border border-gray-300 flex flex-col">
          {options.map((option, index) => (
            <li
              key={index}
              className="py-2 cursor-pointer px-4 capitalize hover:bg-gray-200"
              onClick={() => {
                setSelectedOption(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function PassengersInputField({ Value, setValue }) {
  const [focused, setFocused] = useState(false);
  const InputRef = useRef();
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        ref={InputRef}
        className={`w-full rounded-lg py-2 pl-5 pr-12 bg-white border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 `}
        type="number"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={5}
      />

      <p
        onClick={() => InputRef.current.focus()}
        className={`absolute top-2 left-3 text-zinc-400 px-1 ${
          focused || Value !== "" ? "!text-blue-600 !-top-3 !left-4" : ""
        } transition-all capitalize bg-white`}
      >
        Passengers
      </p>
    </div>
  );
}

// BGW
// CAI
