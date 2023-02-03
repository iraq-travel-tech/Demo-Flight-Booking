import React, { useEffect, useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FullPageCom } from "./FullPageCom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TheDateComponent } from "./DateComponent";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
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
      <div
        onClick={() => setCloseFullPage(true)}
        className="flex-1 rounded-t-xl border p-5 bg-white text-zinc-500 flex gap-4 font-semibold relative  items-center"
      >
        <FaPlaneDeparture size={18} />

        {From ? From.text : "From"}
      </div>
      <div
        onClick={() => setCloseFullPage(true)}
        className="flex-1 rounded-b-xl border p-5 bg-white text-zinc-500 flex gap-4 font-semibold  items-center relative"
      >
        <FaPlaneArrival size={18} />

        {To ? To.text : "To"}
      </div>

      <button
        onClick={handleSwap}
        className="border top-11 right-5 sm:right-5 transition-all border-zinc-400 active:scale-95 hover:bg-zinc-200 rounded p-2 bg-white absolute"
      >
        <TbArrowsDownUp color="gray" size={20} />
      </button>

      <div
        onClick={() => setCloseDatePicker(true)}
        className="flex-1 rounded-xl border p-5 bg-white text-zinc-500 flex gap-4 font-semibold relative items-center mt-4"
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
        <motion.div className="relative">
          <TheDateComponent
            setCloseDatePicker={setCloseDatePicker}
            SelectedType={SelectedType}
            TwoWaysTripDate={TwoWaysTripDate}
            setTwoWaysTripDate={setTwoWaysTripDate}
            OneWayStartDate={OneWayStartDate}
            setOneWayStartDate={setOneWayStartDate}
          />
        </motion.div>
      )}

      <div className="flex-1 rounded-xl border p-5 bg-white text-zinc-500 flex gap-4 font-semibold relative items-center mt-4"></div>
    </div>
  );
}

// cityCode: "AYT"
// cityDisplayName: "Antalya"
// cityName: "Antalya"
// countryDisplayName: "Turkey"
// countryName: "Turkey"
// displayName: "Antalya"
// iataCode: "AYT"
// items: []
// name: "Antalya International Airport"
// priority: 9
