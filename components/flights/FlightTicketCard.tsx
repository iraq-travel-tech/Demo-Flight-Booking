import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";
import Link from "next/link";
import FlightDetails from "./FlightDetails";
import FlightDetailsWrapper from "./FlightDetailsWrapper";
import SeeDetailsButton from "./SeeDetailsButton";
export function convertDuration(duration) {
  let time = duration.split("T")[1].split("S")[0];
  let hours = time.split("H")[0];
  let minutes = time.split("M")[0].split("H")[1];
  return `${hours}h ${minutes}min`;
}

type FlightTicketProps = {
  flight: FlightOffering;
};

export default function FlightTicketCard({ flight }: FlightTicketProps) {
  return (
    <div className="transition-all dark:bg-zinc-900 h-max bg-zinc-100 shadow-xl rounded-xl p-3 flex flex-col sm:gap-2">
      <div className="w-full flex justify-between items-center">
        <div className="sm:text-xl text-lg flex items-baseline sm:gap-4 gap-1 font-bold">
          <p>{flight.Departure.location}</p>
          <div className="h-10 w-10 flex items-center justify-center rounded-full">
            <BsArrowRight />
          </div>
          <p>{flight.Arrival.location}</p>
        </div>

        <div className="sm:flex hidden gap-2">
          <div className="py-1 px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-200 text-sm shadow-lg">
            {flight.validatingCarrier}
          </div>
          <div className="py-1 px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-200 text-sm shadow-lg">
            {flight.totalStops} Stop
          </div>
        </div>
      </div>
      <FlightDetailsWrapper flightSegments={flight.flightSegments}>
        <div className="sm:transition-all sm:dark:bg-zinc-800 sm:bg-zinc-200 bg-zinc-800/0 transition-all sm:py-4 py-1 sm:px-5 px-0 rounded-lg flex sm:flex-row flex-col gap-4 z-10 relative">
          <div className="grid sm:grid-cols-[8em_4em_8em] grid-cols-3 sm:gap-5 gap-2 sm:w-max w-full sm:shadow-none shadow-xl sm:bg-zinc-800/0 bg-zinc-200 dark:bg-zinc-800 rounded-lg sm:p-0 p-4 transition-all">
            <div className="flex flex-col">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Departure.date}
              </div>
              <div className="sm:text-xl text-lg font-bold">
                {flight.Departure.location}
              </div>
              <div className="transition-all dark:text-zinc-500 text-zinc-700 sm:text-md text-sm">
                {flight.Departure.time}
              </div>
            </div>

            <div className="flex items-center flex-col gap-1">
              <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-white transition-all dark:bg-zinc-700">
                <RiPlaneFill className="fill-inherit" />
              </div>
              <div className="transition-all dark:text-zinc-500 font-semibold text-xs mt-1">
                {convertDuration(flight.totalDuration)}{" "}
              </div>
            </div>

            <div className="flex flex-col justify-self-end">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Arrival.date}
              </div>
              <div className="sm:text-xl text-lg font-bold">
                {flight.Arrival.location}
              </div>
              <div className="transition-all dark:text-zinc-500 text-zinc-700 sm:text-md text-sm">
                {flight.Arrival.time}
              </div>
            </div>
          </div>
          <div className="w-2 h-16 self-center rounded-full bg-zinc-600 sm:block hidden" />

          <div className="flex flex-col w-full gap-1 items-end">
            <div className="flex justify-between w-full sm:w-max items-center">
              <div className="flex gap-2 sm:hidden">
                <div className="py-1 px-2 rounded-lg  dark:bg-zinc-800 bg-zinc-200 text-sm transition-all dark:shadow-xl shadow-md">
                  {flight.validatingCarrier}
                </div>
                <div className="py-1  dark:shadow-xl shadow-md px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-200 text-sm">
                  {flight.totalStops} Stop
                </div>
              </div>
              <div className="text-2xl transition-all dark:shadow-xl font-bold">
                ${flight.Price.TotalPrice}
              </div>
            </div>

            <SeeDetailsButton />
          </div>
        </div>
      </FlightDetailsWrapper>
    </div>
  );
}
