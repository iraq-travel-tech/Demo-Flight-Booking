import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";
import FlightDetailsWrapper from "./FlightDetailsWrapper";
import SeeDetailsButton from "./SeeDetailsButton";
import { FlightOfferingEntity } from "../apiFunctions/ResponseTypes";

export default function FlightTicketCard({
  flight,
}: {
  flight: FlightOfferingEntity;
}) {
  return (
    <div className="transition-all dark:bg-zinc-900 h-max bg-zinc-200 shadow-xl rounded-xl p-3 flex flex-col md:gap-2">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-10 h-10 dark:bg-zinc-800 bg-zinc-100 rounded-full">
            <img
              src={`https://storage.googleapis.com/uapi-search-microservice-f2/static/${flight.validatingCarrier.logo}`}
              alt=""
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold capitalize">
              {flight.validatingCarrier.en}
            </div>
            <div className="text-xs dark:text-zinc-400">
              {flight.Departure.date} | {flight.cabin}
            </div>
          </div>
        </div>

        <div className="md:flex hidden gap-2">
          <div className="py-1 px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-100 text-sm shadow-lg">
            {flight.totalStops === 0
              ? "direct flight"
              : `${flight.totalStops} Stop`}
          </div>
        </div>
      </div>
      <FlightDetailsWrapper flightSegments={flight.flightSegments}>
        <div className="md:transition-all md:dark:bg-zinc-800 bg-zinc-100/0 md:bg-zinc-100 md:shadow-md dark:bg-zinc-900 transition-all md:py-4 py-1 md:px-5 px-0 rounded-lg flex md:flex-row flex-col gap-4 z-10 relative  mt-2 sm:mt-1">
          <div className="grid md:grid-cols-[10em_4em_10em] grid-cols-[1fr_4em_1fr] md:gap-5 gap-2 md:w-max w-full  md:bg-zinc-800/0 bg-zinc-100 dark:bg-zinc-800 rounded-lg md:p-0 p-4 transition-all">
            <div className="flex flex-col">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Departure.date}
              </div>
              <div className="md:text-xl text-md font-bold">
                {flight.Departure.location.en}
              </div>
              <div className="transition-all dark:text-zinc-500 text-zinc-700 md:text-md text-sm">
                {flight.Departure.time}
              </div>
            </div>

            <div className="flex items-center flex-col gap-1">
              <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-white transition-all dark:bg-zinc-700">
                <RiPlaneFill className="fill-inherit" />
              </div>
              <div className="transition-all dark:text-zinc-500 font-semibold text-xs mt-1">
                {flight.totalDuration.en}
              </div>
            </div>

            <div className="flex flex-col justify-self-end">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Arrival.date}
              </div>
              <div className="md:text-xl text-md font-bold">
                {flight.Arrival.location.en}
              </div>
              <div className="transition-all dark:text-zinc-500 text-zinc-700 md:text-md text-sm">
                {flight.Arrival.time}
              </div>
            </div>
          </div>
          <div className="w-2 h-16 self-center rounded-full bg-zinc-600 md:block hidden" />

          <div
            className={`flex flex-col w-full gap-1 items-end 
          
          ${flight.totalStops === 0 && "!justify-center"}

          `}
          >
            <div className="flex w-full md:w-max text-center gap-3">
              <div className="flex gap-2 md:hidden flex-1 ">
                <div className="dark:shadow-xl py-2  shadow-md w-full px-2 rounded-lg transition-all dark:bg-zinc-800 md:bg-zinc-200 bg-zinc-100 text-lg">
                  {flight.totalStops === 0
                    ? "Direct flight"
                    : `${flight.totalStops} Stop`}
                </div>
              </div>
              <div
                className={`md:text-2xl text-lg flex-1 text-center py-2 rounded-lg dark:bg-zinc-800 bg-zinc-100 md:bg-zinc-50/0 transition-all md:font-bold md:shadow-none shadow-md ${
                  flight.totalStops === 0 && "md:text-3xl"
                }`}
              >
                ${flight.Price.TotalPrice}
              </div>
            </div>

            {flight.totalStops > 0 && <SeeDetailsButton />}
          </div>
        </div>
      </FlightDetailsWrapper>
    </div>
  );
}
