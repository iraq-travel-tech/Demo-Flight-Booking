import React, { useEffect, useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FullPageCom } from "./FullPageCom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TheDateComponent } from "./DateComponent";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import Passengers from "./Passengers";
import { AnimatePresence } from "framer-motion";

export default function TripFromAndTo({ SelectedType }) {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  const [CloseFullPage, setCloseFullPage] = useState(false);
  const [CloseDatePicker, setCloseDatePicker] = useState(false);
  const handleSwap = () => {
    setFrom(To);
    setTo(From);
  };

  const [OneWayStartDate, setOneWayStartDate] = useState("");
  const [TwoWaysTripDate, setTwoWaysTripDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [ShowPassengerComponent, setShowPassengerComponent] = useState(false);

  useEffect(() => {
    setOneWayStartDate("");
    setTwoWaysTripDate([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
  }, [SelectedType]);
















  return (
    <div className="flex flex-col mt-4 sm:text-md text-sm relative">
      <motion.div layoutId="fromInputId" className="flex flex-col">
        <div
          onClick={() => setCloseFullPage(true)}
          className="flex-1 rounded-t-xl border p-5 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 text-zinc-500 flex gap-4 cursor-pointer active:bg-zinc-200 transition-all font-semibold relative hover:bg-zinc-200 items-center"
        >
          <FaPlaneDeparture size={18} />

          {From ? From.text : "From"}
        </div>
        <div
          onClick={() => setCloseFullPage(true)}
          className="flex-1 cursor-pointer active:bg-zinc-200 transition-all rounded-b-xl border p-5 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 text-zinc-500 flex gap-4 font-semibold hover:bg-zinc-200 items-center relative"
        >
          <FaPlaneArrival size={18} />

          {To ? To.text : "To"}
        </div>
      </motion.div>
      <button
        onClick={handleSwap}
        className="border dark:!bg-zinc-900 dark:border-zinc-700 top-11 right-5 sm:right-5 transition-all border-zinc-400 active:scale-95 hover:bg-zinc-200 rounded p-2  bg-white absolute"
      >
        <TbArrowsDownUp color="gray" size={20} />
      </button>
      <div
        onClick={() => setCloseDatePicker(true)}
        className="flex-1 cursor-pointer rounded-xl border dark:hover:bg-zinc-700  p-5 bg-white active:bg-zinc-200 text-zinc-500 flex gap-4 font-semibold relative items-center mt-4 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-200"
      >
        <MdOutlineDateRange size={22} />
        {SelectedType === 0 && (
          <>{OneWayStartDate ? OneWayStartDate : "Date"}</>
        )}
        {SelectedType === 1 && (
          <>
            {TwoWaysTripDate[0].endDate
              ? `${new Date(TwoWaysTripDate[0].startDate)
                  .toISOString()
                  .slice(0, 10)} - ${new Date(TwoWaysTripDate[0].endDate)
                  .toISOString()
                  .slice(0, 10)}`
              : "Date"}
          </>
        )}
      </div>
      <div
        onClick={() => setShowPassengerComponent(true)}
        className="flex-1  dark:hover:bg-zinc-700  hover:bg-zinc-200 rounded-xl border p-5 cursor-pointer bg-white text-zinc-500 flex gap-4 font-semibold relative items-center mt-4 active:bg-zinc-200 dark:bg-zinc-800  dark:border-zinc-700"
      >
        <MdOutlineDateRange size={22} />
        Passengers{" "}
      </div>
      <AnimatePresence>
        {CloseFullPage && (
          <FullPageCom
            setCloseFullPage={setCloseFullPage}
            From={From}
            To={To}
            setFrom={setFrom}
            setTo={setTo}
          />
        )}
        {CloseDatePicker && (
          <>
            <TheDateComponent
              setCloseDatePicker={setCloseDatePicker}
              SelectedType={SelectedType}
              TwoWaysTripDate={TwoWaysTripDate}
              setTwoWaysTripDate={setTwoWaysTripDate}
              OneWayStartDate={OneWayStartDate}
              setOneWayStartDate={setOneWayStartDate}
            />
          </>
        )}
        {ShowPassengerComponent && (
          <Passengers setShowPassengerComponent={setShowPassengerComponent} />
        )}{" "}
      </AnimatePresence>
      <button className="mt-5 bg-blue-600 rounded-xl p-3 font-bold text-lg capitalize text-white active:scale-95 active:bg-blue-700 transition-all">
        search for flights
      </button>
    </div>
  );
}
