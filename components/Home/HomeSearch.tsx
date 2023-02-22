"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import DateInput from "./components/DateInput";
import FromAndTo from "./components/FromAndTo";
import { FullPageCom } from "./FullPageComponent/FullPageCom";
import Passengers from "./components/Passengers";
import PassengersInput from "./components/PassengersInput";
import { TheDateComponent } from "./components/TheDateComponent";
import TripType from "./components/TripType";

export default function HomeSearch() {
  const [Loading, setLoading] = useState<true | false>(false);
  const [FlightPassengers, setFlightPassengers] = useState<{
    Adults: number;
    Children: number;
    Babies: number;
  }>({
    Adults: 1,
    Children: 0,
    Babies: 0,
  });
  const [FlightClass, setFlightClass] = useState<"economy" | "business">(
    "economy"
  );
  const [SelectedType, setSelectedType] = useState<1 | 0>(0);

  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  const handleSwap = () => {
    setFrom(To);
    setTo(From);
  };

  const [OneWayStartDate, setOneWayStartDate] = useState("");
  const [TwoWaysTripDate, setTwoWaysTripDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [ShowFullPage, setShowFullPage] = useState<true | false>(false);
  const [ShowDatePicker, setShowDatePicker] = useState<true | false>(false);
  const [ShowPassengerComponent, setShowPassengerComponent] = useState<
    true | false
  >(false);

  return (
    <div className="p-4 relative -top-32">
      <TripType SelectedType={SelectedType} setSelectedType={setSelectedType} />
      <FromAndTo From={From} setShowFullPage={setShowFullPage} To={To} />
      <DateInput
        SelectedType={SelectedType}
        TwoWaysTripDate={TwoWaysTripDate}
        OneWayStartDate={OneWayStartDate}
        setShowDatePicker={setShowDatePicker}
      />
      <PassengersInput
        setShowPassengerComponent={setShowPassengerComponent}
        FlightPassengers={FlightPassengers}
      />
      <AnimatePresence>
        {ShowFullPage && (
          <FullPageCom
            setShowFullPage={setShowFullPage}
            From={From}
            To={To}
            setFrom={setFrom}
            setTo={setTo}
          />
        )}
        {ShowDatePicker && (
          <>
            <TheDateComponent
              setShowDatePicker={setShowDatePicker}
              SelectedType={SelectedType}
              TwoWaysTripDate={TwoWaysTripDate}
              setTwoWaysTripDate={setTwoWaysTripDate}
              OneWayStartDate={OneWayStartDate}
              setOneWayStartDate={setOneWayStartDate}
            />
          </>
        )}
        {ShowPassengerComponent && (
          <Passengers
            FlightClass={FlightClass}
            setFlightClass={setFlightClass}
            setFlightPassengers={setFlightPassengers}
            setShowPassengerComponent={setShowPassengerComponent}
          />
        )}{" "}
      </AnimatePresence>
      <Link
        href={`/flights?from=${From}&to=${To}&adults=${
          FlightPassengers && FlightPassengers.Adults
        }&children=${FlightPassengers && FlightPassengers.Children}&babies=${
          FlightPassengers && FlightPassengers.Children
        }&tripclass=${FlightClass}&departure=${
          SelectedType === 0
            ? OneWayStartDate
            : getDate(TwoWaysTripDate[0].startDate) +
              "&returndate=" +
              getDate(TwoWaysTripDate[0].endDate)
        }`}
        onClick={() => setLoading(true)}
        className={`mt-5 text-center bg-blue-600 rounded-xl p-3 font-bold text-lg capitalize text-white active:scale-95 active:bg-blue-700 flex justify-center transition-all relative ${
          Loading && "bg-blue-800"
        }`}
      >
        {!Loading ? (
          "search for flights"
        ) : (
          <div className="animate-spin">
            <ImSpinner2 />
          </div>
        )}
      </Link>
    </div>
  );
}

export const getDate = (Dat: string) => {
  let date = new Date(Dat);

  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  let formattedDate = year + "-" + month + "-" + day;
  return `${formattedDate}`;
};
