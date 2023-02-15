import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";
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
    <div className="transition-all dark:bg-zinc-900 h-max bg-zinc-200 shadow-xl rounded-xl p-3 flex flex-col md:gap-2">
      <div className="w-full flex justify-between items-center">
        <div className="md:text-xl text-sm flex items-baseline md:gap-4 gap-1 font-bold">
          <p>{flight.Departure.location}</p>
          <div className="h-10 w-10 flex items-center justify-center rounded-full">
            <BsArrowRight />
          </div>
          <p>{flight.Arrival.location}</p>
        </div>

        <div className="md:flex hidden gap-2">
          <div className="py-1 px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-100 text-sm shadow-lg">
            {flight.validatingCarrier}
          </div>
          <div className="py-1 px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-100 text-sm shadow-lg">
            {flight.totalStops === 0
              ? "direct flight"
              : `${flight.totalStops} Stop`}
          </div>
        </div>
      </div>
      <FlightDetailsWrapper flightSegments={flight.flightSegments}>
        <div className="md:transition-all md:dark:bg-zinc-800 md:bg-zinc-100 md:shadow-md bg-zinc-900 transition-all md:py-4 py-1 md:px-5 px-0 rounded-lg flex md:flex-row flex-col gap-4 z-10 relative">
          <div className="grid md:grid-cols-[10em_4em_10em] grid-cols-3 md:gap-5 gap-2 md:w-max w-full md:shadow-none shadow-xl md:bg-zinc-800/0 bg-zinc-100 dark:bg-zinc-800 rounded-lg md:p-0 p-4 transition-all">
            <div className="flex flex-col">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Departure.date}
              </div>
              <div className="md:text-xl text-md font-bold">
                {flight.Departure.location}
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
                {convertDuration(flight.totalDuration)}{" "}
              </div>
            </div>

            <div className="flex flex-col justify-self-end">
              <div className="transition-all dark:text-zinc-400 text-xs">
                {flight.Arrival.date}
              </div>
              <div className="md:text-xl text-md font-bold">
                {flight.Arrival.location}
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
            <div className="flex justify-between w-full md:w-max items-center">
              <div className="flex gap-2 md:hidden">
                <div className="py-1 px-2 rounded-lg  dark:bg-zinc-800 bg-zinc-200 text-sm transition-all dark:shadow-xl shadow-md">
                  {flight.validatingCarrier}
                </div>
                <div className="py-1  dark:shadow-xl shadow-md px-2 rounded-lg transition-all dark:bg-zinc-800 bg-zinc-200 text-sm">
                  {flight.totalStops === 0
                    ? "Direct flight"
                    : `${flight.totalStops} Stop`}
                </div>
              </div>
              <div
                className={`text-2xl transition-all  font-bold
          ${flight.totalStops === 0 && "md:text-3xl"}

              `}
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
