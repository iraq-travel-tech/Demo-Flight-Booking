import { useEffect, useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaDownload } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import FlightSearchInput from "../inputs/FlightSearchInput";
import PassengersInputField from "../inputs/PassengersInputField";
export default function FlightSearchContainer({ setData }) {
  const classes = ["bussiness", "economy"];
  const [FromTrip, setFromTrip] = useState("");
  const [ToTrip, setToTrip] = useState("");
  const [FlightClass, setFlightClass] = useState(classes[0]);
  const [Return, setReturn] = useState(false);
  const [Passengers, setPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const FetchData = async () => {
    const res = await fetch(`/api/flights`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        from: FromTrip,
        to: ToTrip,
        date: selectedDate,
        passengers: Passengers,
      }),
    });

    const data = await res.json();

    if (data.data.error) {
      return console.error(data.data);
    }
    setData(data);
  };

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
            <FlightSearchInput
              placeholder="from"
              Value={FromTrip}
              setValue={setFromTrip}
              EndIcon={FaPlaneDeparture}
            />
            <FlightSearchInput
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
          <button
            onClick={FetchData}
            className="bg-blue-600 p-3 rounded shadow  w-full font-bold text-white active:scale-95 block text-center transition-all active:bg-blue-700 my-2 mt-4"
          >
            Find Flights
          </button>
        </div>
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

// BGW
// CAI
