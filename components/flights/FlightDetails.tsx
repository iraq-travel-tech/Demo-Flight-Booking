import { Flight } from "@/interface/FlightOfferingsResponse";
import { RiPlaneFill } from "react-icons/ri";
import { convertDuration } from "./FlightTicketCard";

export default function FlightDetails({
  flight,
  FlightIndex,
}: {
  flight: Flight;
  FlightIndex: number;
}) {
  console.log(flight.Departure.location);

  return (
    <div className="dark:bg-zinc-800 bg-zinc-300 py-3 px-4 sm:px-7 sm:w-max w-full rounded-xl relative flex gap-5 items-center justify-between sm:mt-0 mt-[4em] self-end transition-all sm:min-w-[32em]">
      <div className="h-[5em] sm:hidden w-1 absolute bg-zinc-800 rounded-t-full -translate-x-[50%] left-[50%] -translate-y-[100%] top-0 flex items-center justify-center overflow-visible">
        <div className="bg-zinc-800 min-w-[2.5em] h-[2.5em] flex items-center justify-center rounded-full text-xs text-zinc-400">
          {FlightIndex + 1}
        </div>
      </div>

      <div className="sm:block hidden absolute h-1 sm:w-[2em]  bg-zinc-800 left-0 -translate-x-[100%] top-[50%] -translate-y-[50%]">
        <div className="absolute h-[9em] w-1 left-0 bottom-0 bg-zinc-800"></div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs text-zinc-400">{flight.Departure.date}</div>
        <div className="sm:text-xl text-sm font-bold">
          {flight.Departure.location}
        </div>
        <div className="text-sm text-zinc-400 truncate w-10">
          {flight.Departure.time}
        </div>
      </div>

      <div className="flex flex-col w-2/6 transition-all sm:w-max items-center sm:overflow-auto overflow-hidden">
        <div className="font-bold text-xs -mb-2">RJ</div>
        <div className="text-zinc-400 truncate">
          ...............................
        </div>

        <div className="rotate-90 -mt-[1.05em] fill-zinc-400">
          <RiPlaneFill size={20} className="fill-inherit" />
        </div>

        <div className="text-zinc-400 text-xs">
          {convertDuration(flight.duration)}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs text-zinc-400">{flight.Arrival.date}</div>
        <div className="sm:text-xl text-sm font-bold">
          {flight.Arrival.location}
        </div>
        <div className="text-sm text-zinc-400 truncate w-10">
          {flight.Arrival.time}
        </div>
      </div>
    </div>
  );
}
