import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";

export default function FlightTicketCard({ flight, MainFrom, MainTo }) {
  const backgroundColor =
  flight.departureLocationCode === MainFrom &&
  flight.arrivalLocationCode === MainTo
  ? "!bg-red-600"
  : "bg-white";
  
    return (
    <div
      className={`bg-white dark:bg-zinc-900 shadow p-4 dark:text-white rounded-xl transition-all flex flex-col gap-3 ${backgroundColor} `}
    >
      <div className="sm:text-xl text-lg flex items-center gap-4 font-bold">
        <p>{flight.departureLocationCode}</p>
        <div className="h-10 w-10 flex items-center justify-center rounded-full">
          <BsArrowRight />
        </div>
        <p>
          {flight.arrivalLocationCode}
        </p>
      </div>

      <div className="bg-zinc-300 transition-all dark:bg-zinc-800 dark:shadow-xl p-5 rounded-xl flex sm:flex-row flex-col items-center sm:gap-3">
        <div className="flex flex-col sm:w-max w-full">
          <div
            className="grid 
            
            sm:grid-cols-[8em_4em_8em]
            grid-cols-3
            
            sm:gap-5 gap-2"
          >
            <div className="flex flex-col">
              <div className="dark:text-zinc-400 text-xs">
                {flight.departureDate}
              </div>
              <div className="sm:text-xl text-lg font-bold">Departure</div>
              <div className="text-zinc-300 sm:text-md text-sm">
                {flight.departureTime}
              </div>
            </div>

            <div className="flex items-center flex-col gap-1">
              <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-white dark:bg-zinc-700">
                <RiPlaneFill className="fill-inherit" />
              </div>
              <div className="dark:text-zinc-400 text-xs mt-1">3h 20min</div>
            </div>

            <div className="flex flex-col justify-self-end">
              <div className="dark:text-zinc-400 text-xs">
                {flight.arrivalDate}
              </div>
              <div className="sm:text-xl text-lg font-bold">Arrival</div>
              <div className="text-zinc-300 sm:text-md text-sm">
                {flight.arrivalTime}
              </div>
            </div>
          </div>

          <div className="flex justify-between sm:mt-0 mt-2 items-end">
            <div className="bg-black dark:bg-zinc-900 py-2 px-3 w-max rounded-full text-xs mt-4 text-white font-bold h-max">
              $130
            </div>

            <div className="flex sm:flex-col flex-row gap-2 sm:hidden text-xs">
              <div className="bg-white dark:bg-zinc-700 py-2 px-3 rounded-full w-max font-bold h-max flex items-center gap-2">
                <FaUser size={13} />2
              </div>
              <div className="bg-white dark:bg-zinc-700 py-2 px-3 rounded-full w-max font-bold h-max flex items-center gap-2">
                <FaWineGlassAlt size={13} />
                Economy
              </div>
            </div>
          </div>
        </div>

        <div className="sm:h-20 h-0 sm:w-1  rounded-full bg-zinc-400 "></div>

        <div className="sm:flex hidden flex-col gap-2">
          <div className="bg-white dark:bg-zinc-700 py-2 px-3 rounded-full w-max font-bold text-xs flex items-center gap-2">
            <FaUser size={13} />2
          </div>
          <div className="bg-white dark:bg-zinc-700 py-2 px-3 rounded-full w-max font-bold text-xs flex items-center gap-2">
            <FaWineGlassAlt size={13} />
            Economy
          </div>
        </div>
      </div>
    </div>
  );
}