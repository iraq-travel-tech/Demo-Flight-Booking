import { RiPlaneFill } from "react-icons/ri";
import { Flight } from "../apiFunctions/ResponseTypes";

export default function FlightDetails({
  flight,
  FlightIndex,
}: {
  flight: Flight;
  FlightIndex: number;
}) {

  return (
    <div className="dark:bg-zinc-800 bg-zinc-300 py-3 px-4 md:px-7 md:w-max w-full rounded-xl relative flex gap-4 items-center justify-between md:mt-0 mt-[4em] self-end transition-all md:min-w-[33em]">
      <div className="h-[5em] md:hidden w-1 absolute bg-zinc-300 dark:bg-zinc-800 rounded-t-full -translate-x-[50%] left-[50%] -translate-y-[100%] top-0 flex items-center justify-center overflow-visible">
        <div className="dark:bg-zinc-800 bg-zinc-300 min-w-[2.5em] h-[2.5em] flex items-center justify-center rounded-full text-xs dark:dark:text-zinc-400 text-zinc-600">
          {FlightIndex + 1}
        </div>
      </div>

      <div className="md:block hidden absolute h-1 md:w-[2em]  dark:bg-zinc-800 bg-zinc-300 left-0 -translate-x-[100%] top-[50%] -translate-y-[50%]">
        <div className="absolute h-[9em] w-1 left-0 bottom-0 dark:bg-zinc-800 bg-zinc-300"></div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs dark:text-zinc-400 text-zinc-600">
          {flight.Departure.date}
        </div>
        <div className="md:text-xl text-sm font-bold">
          {flight.Departure.location.en}
        </div>
        <div className="text-sm dark:text-zinc-400 text-zinc-600 truncate w-10">
          {flight.Departure.time}
        </div>
      </div>

      <div className="flex flex-col w-2/6 transition-all md:w-max items-center md:overflow-auto overflow-hidden">
        <div className="font-bold text-xs -mb-2">RJ</div>
        <div className="dark:text-zinc-400 text-zinc-600 truncate">
          ...............................
        </div>

        <div className="rotate-90 -mt-[1.05em] fill-zinc-400">
          <RiPlaneFill size={20} className="fill-inherit" />
        </div>

        <div className="dark:text-zinc-400 text-zinc-600 text-xs">
          {flight.duration.en}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs dark:text-zinc-400 text-zinc-600">
          {flight.Arrival.date}
        </div>
        <div className="md:text-xl text-sm font-bold">
          {flight.Arrival.location.en}
        </div>
        <div className="text-sm dark:text-zinc-400 text-zinc-600 truncate w-10">
          {flight.Arrival.time}
        </div>
      </div>
    </div>
  );
}
