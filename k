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
import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";

export const getDate = (Dat) => {
  let date = new Date(Dat);

  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  let formattedDate = year + "-" + month + "-" + day;
  return `${formattedDate}`;
};

export default function TripFromAndTo({ SelectedType }) {
  const [Loading, setLoading] = useState(false);
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [FlightPassengers, setFlightPassengers] = useState("");
  const [FlightClass, setFlightClass] = useState("economy");

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

  const [ShowFullPage, setShowFullPage] = useState(false);
  const [ShowDatePicker, setShowDatePicker] = useState(false);
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
      <AnimatePresence>
        <motion.div
          layoutId="fromInputId"
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={() => setShowFullPage
                </motion.div>
                </AnimatePresence>
                
                {ShowFullPage && (
                    <FullPageCom
                      From={From}
                      setFrom={setFrom}
                      To={To}
                      setTo={setTo}
                      setShowFullPage={setShowFullPage}
                    />
                  )}
                
                  {ShowDatePicker && (
                    <TheDateComponent
                      setOneWayStartDate={setOneWayStartDate}
                      setTwoWaysTripDate={setTwoWaysTripDate}
                      SelectedType={SelectedType}
                      setShowDatePicker={setShowDatePicker}
                    />
                  )}
                
                  { ShowPassengerComponent && (
                    <Passengers
                      FlightPassengers={FlightPassengers}
                      setFlightPassengers={setFlightPassengers}
                      FlightClass={FlightClass}
                      setFlightClass={setFlightClass}
                      setShowPassengerComponent={setShowPassengerComponent}
                    />
                  )}
                
                  <Link
                    href={{
                      pathname: "/search",
                      query: {
                        From: From ? From.code : "",
                        To: To ? To.code : "",
                        FlightClass: FlightClass,
                        FlightPassengers: FlightPassengers,
                        OneWayStartDate: getDate(OneWayStartDate),
                        TwoWaysStartDate: getDate(TwoWaysTripDate[0].startDate),
                        TwoWaysEndDate: getDate(TwoWaysTripDate[0].endDate),
                        TripType: SelectedType,
                      },
                    }}
                  >
                    <button
                      disabled={
                        !From || !To || !FlightClass || !FlightPassengers || !OneWayStartDate
                      }
                      onClick={() => setLoading(true)}
                      className="bg-zinc-500 text-white font-bold py-2 px-4 rounded w-full mt-5 sm:mt-3"
                    >
                      {Loading ? (
                        <ImSpinner2 className="animate-spin" size={20} />
                      ) : (
                        "Find Flights"
                      )}
                    </button>
                  </Link>
                </div>
                );
            }                                