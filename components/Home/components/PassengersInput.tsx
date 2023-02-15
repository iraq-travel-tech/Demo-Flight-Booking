"use client";
import { FiUsers } from "react-icons/fi";

export default function PassengersInput({
  setShowPassengerComponent,
  FlightPassengers,
}) {
  return (
    <div
      onClick={() => setShowPassengerComponent(true)}
      className="flex-1  dark:hover:bg-zinc-700  hover:bg-zinc-200 rounded-xl border p-5 cursor-pointer bg-white text-zinc-500 flex gap-4 font-semibold relative items-center mt-4 active:bg-zinc-200 dark:bg-zinc-800  dark:border-zinc-700"
    >
      <FiUsers size={22} />
      {FlightPassengers &&
        FlightPassengers.Adults +
          FlightPassengers.Children +
          FlightPassengers.Babies}{" "}
      {FlightPassengers.Adults +
        FlightPassengers.Children +
        FlightPassengers.Babies <
      2
        ? "Passenger"
        : "Passengers"}
    </div>
  );
}
