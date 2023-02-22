import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";

export default function LoadingTicketCard() {
  return (
    <div
      className={`md:h-[12.75em] h-[18em] dark:bg-zinc-900 bg-zinc-100 shadow-xl rounded-xl p-3 flex flex-col md:gap-2`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 dark:bg-zinc-800 bg-zinc-300 rounded-full animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold capitalize">
              <p className="w-[5em] rounded dark:bg-zinc-800 bg-zinc-300 animate-pulse h-4"></p>
            </div>
            <div className="text-xs dark:text-zinc-400 flex gap-2">
              <p className="w-[4em] rounded dark:bg-zinc-800 bg-zinc-300 animate-pulse h-3"></p>{" "}
              |{" "}
              <p className="w-[4em] rounded dark:bg-zinc-800 bg-zinc-300 animate-pulse h-3"></p>
            </div>
          </div>
        </div>

        <div className="md:flex hidden gap-2">
          <div className="rounded-lg h-[1.4em] animate-pulse w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg"></div>
          <div className="rounded-lg h-[1.4em] animate-pulse w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg"></div>
        </div>
      </div>

      <div className="md:transition-all md:dark:bg-zinc-800 md:bg-zinc-200 bg-zinc-800/0 transition-all md:py-4 py-1 md:px-5 px-0 rounded-lg flex md:flex-row flex-col gap-4 min-h-[7.35em]">
        <div className="grid md:grid-cols-[8em_4em_8em] grid-cols-3 md:gap-5 gap-2 md:w-max w-full md:shadow-none shadow-xl md:bg-zinc-800/0 bg-zinc-200 dark:bg-zinc-800 rounded-lg md:p-0 p-4 transition-all ">
          <div className="flex flex-col">
            <div className="h-[1em] animate-pulse w-[3em] dark:bg-zinc-700 bg-zinc-300 rounded">
              {/* {flight.Departure.date} */}
            </div>
            <div className="h-[1.5em] animate-pulse mt-2 w-[4em] dark:bg-zinc-700 bg-zinc-300 rounded-md">
              {/* {flight.Departure.location} */}
            </div>
            <div className="h-[1em] animate-pulse w-[2.3em] mt-1 dark:bg-zinc-700 bg-zinc-300 rounded">
              {/* {flight.Departure.time} */}
            </div>
          </div>

          <div className="flex items-center flex-col gap-1">
            <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-zinc-300 animate-pulse transition-all dark:bg-zinc-700">
              <RiPlaneFill className="fill-inherit" />
            </div>
            <div className="h-[.8em] animate-pulse w-[3em] mt-1 dark:bg-zinc-700 rounded">
              {/* {convertDuration(flight.totalDuration)}{" "} */}
            </div>
          </div>

          <div className="flex flex-col justify-self-end">
            <div className="h-[1em] animate-pulse bg-zinc-300 w-[3em] dark:bg-zinc-700 rounded">
              {/* {flight.Arrival.date} */}
            </div>
            <div className="h-[1.5em] animate-pulse bg-zinc-300 mt-2 w-[4em] dark:bg-zinc-700 rounded-md">
              {/* {flight.Arrival.location} */}
            </div>
            <div className="h-[1em] animate-pulse bg-zinc-300 w-[2.3em] mt-1 dark:bg-zinc-700 rounded">
              {/* {flight.Arrival.time} */}
            </div>
          </div>
        </div>
        <div className="w-2 h-16 self-center rounded-full dark:bg-zinc-600 bg-zinc-300 md:block hidden" />

        <div className="flex flex-col w-full gap-1 items-end">
          <div className="flex w-full md:w-max text-center gap-3">
            <div className="flex gap-2 md:hidden flex-1 ">
              <div className="dark:shadow-xl h-[2.75em] py-2 shadow-md w-full px-2 rounded-lg transition-all dark:bg-zinc-800 md:bg-zinc-200 bg-zinc-100 text-lg animate-pulse"></div>
            </div>
            <div
              className={`md:text-2xl md:h-[1.5em] h-[2.75em] flex-1 text-center py-2 rounded-lg text-lg md:w-24 md:bg-zinc-50/0 transition-all md:shadow-none shadow-md dark:md:bg-zinc-700 dark:bg-zinc-800 md:bg-zinc-300 bg-zinc-100 animate-pulse`}
            ></div>
          </div>

          <div className="dark:bg-zinc-800 bg-zinc-300 mt-2 md:dark:bg-zinc-700 dark:shadow-xl shadow-md rounded md:w-[5.5em] md:h-[1.5em] animate-pulse h-[2.25em] w-full"></div>
        </div>
      </div>
    </div>
  );
}
