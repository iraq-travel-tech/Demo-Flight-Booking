// import { BsArrowRight } from "react-icons/bs";
// import { RiPlaneFill } from "react-icons/ri";

// export default function LoadingTicketCard() {
//   return (
//     <div
//       className={`bg-white dark:bg-zinc-900 shadow p-4 rounded-xl transition-all flex flex-col gap-3 min-h-[8em]`}
//     >
//       <div className="flex items-center  gap-2">
//         <p className="h-6 w-14 dark:bg-zinc-800 bg-zinc-300 skeleton-box rounded"></p>
//         <div className="h-10 w-10 flex items-center justify-center rounded-full">
//           <BsArrowRight />
//         </div>
//         <p className="h-6 w-14 dark:bg-zinc-800 bg-zinc-300 skeleton-box rounded"></p>
//       </div>

//       <div className="bg-zinc-100 flex-1 transition-all dark:bg-zinc-800 dark:shadow-xl p-5 rounded-xl flex sm:flex-row flex-col items-center sm:gap-3">
//         <div className="flex flex-col sm:w-max w-full self-start">
//           <div className="grid sm:grid-cols-[8em_4em_8em] grid-cols-3 sm:gap-5 gap-2">
//             <div className="flex flex-col">
//               <div className="w-12 h-5 rounded dark:bg-zinc-700 bg-zinc-300 skeleton-box"></div>
//               <div className="w-2/3 h-6 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
//               <div className="w-14 h-5 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
//             </div>

//             <div className="flex items-center flex-col gap-1">
//               <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-white dark:bg-zinc-700 skeleton-box">
//                 <RiPlaneFill className="fill-inherit" />
//               </div>
//               <div className="h-4 w-9 skeleton-box dark:bg-zinc-700 bg-zinc-300 mt-1 rounded"></div>
//             </div>

//             <div className="flex flex-col justify-self-end">
//             <div className="w-12 h-5 rounded dark:bg-zinc-700 bg-zinc-300 skeleton-box"></div>
//               <div className="w-20 h-6 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
//               <div className="w-14 h-5 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
//             </div>
//           </div>
//         </div>

//         <div className="sm:flex hidden flex-col gap-2 self-start ml-2">
//           <div className="bg-zinc-300 dark:bg-zinc-700 py-2 px-3 rounded-full w-14 skeleton-box h-6"></div>
//           <div className="bg-zinc-300 dark:bg-zinc-700 py-2 px-3 rounded-full w-14 skeleton-box h-6"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";

export default function LoadingTicketCard() {
  return (
    <div
      className={`sm:h-[11em] h-[16.4em] dark:bg-zinc-900 bg-zinc-100 shadow-xl rounded-xl p-3 flex flex-col sm:gap-2`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="sm:text-xl text-lg flex items-baseline sm:gap-4 gap-1 font-bold">
          <p className="skeleton-box h-[1.2em] rounded w-[2em] dark:bg-zinc-800"></p>
          <div className="h-10 w-10 flex items-center justify-center rounded-full">
            <BsArrowRight />
          </div>
          <p className="skeleton-box h-[1.2em] rounded w-[2em] dark:bg-zinc-800"></p>
        </div>

        <div className="sm:flex hidden gap-2">
          <div className="rounded-lg h-[1.3em] skeleton-box w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg"></div>
          <div className="rounded-lg h-[1.3em] skeleton-box w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg"></div>
        </div>
      </div>

      <div className="sm:transition-all sm:dark:bg-zinc-800 sm:bg-zinc-200 bg-zinc-800/0 transition-all sm:py-4 py-1 sm:px-5 px-0 rounded-lg flex sm:flex-row flex-col gap-4">
        <div className="grid sm:grid-cols-[8em_4em_8em] grid-cols-3 sm:gap-5 gap-2 sm:w-max w-full sm:shadow-none shadow-xl sm:bg-zinc-800/0 bg-zinc-200 dark:bg-zinc-800 rounded-lg sm:p-0 p-4 transition-all">
          <div className="flex flex-col">
            <div className="h-[1em] skeleton-box w-[3em] dark:bg-zinc-700 bg-zinc-300 rounded">
              {/* {flight.Departure.date} */}
            </div>
            <div className="h-[1.5em] skeleton-box mt-2 w-[4em] dark:bg-zinc-700 bg-zinc-300 rounded-md">
              {/* {flight.Departure.location} */}
            </div>
            <div className="h-[1em] skeleton-box w-[2.3em] mt-1 dark:bg-zinc-700 bg-zinc-300 rounded">
              {/* {flight.Departure.time} */}
            </div>
          </div>

          <div className="flex items-center flex-col gap-1">
            <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-zinc-300 skeleton-box transition-all dark:bg-zinc-700">
              <RiPlaneFill className="fill-inherit" />
            </div>
            <div className="h-[.8em] skeleton-box w-[3em] mt-1 dark:bg-zinc-700 rounded">
              {/* {convertDuration(flight.totalDuration)}{" "} */}
            </div>
          </div>

          <div className="flex flex-col justify-self-end">
            <div className="h-[1em] skeleton-box bg-zinc-300 w-[3em] dark:bg-zinc-700 rounded">
              {/* {flight.Arrival.date} */}
            </div>
            <div className="h-[1.5em] skeleton-box bg-zinc-300 mt-2 w-[4em] dark:bg-zinc-700 rounded-md">
              {/* {flight.Arrival.location} */}
            </div>
            <div className="h-[1em] skeleton-box bg-zinc-300 w-[2.3em] mt-1 dark:bg-zinc-700 rounded">
              {/* {flight.Arrival.time} */}
            </div>
          </div>
        </div>
        <div className="w-2 h-16 self-center rounded-full dark:bg-zinc-600 bg-zinc-300 sm:block hidden" />

        <div className="flex flex-col w-full gap-1 items-end">
          <div className="flex justify-between w-full sm:w-max items-center">
            <div className="flex gap-2 sm:hidden">
              <div className="rounded-lg skeleton-box h-[1.3em] w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg">
                {/* {flight.validatingCarrier} */}
              </div>
              <div className="rounded-lg skeleton-box h-[1.3em] w-[2.2em] dark:bg-zinc-800 bg-zinc-300 shadow-lg">
                {/* {flight.totalStops} Stop */}
              </div>
            </div>
            <div className="h-[1.6em] skeleton-box w-[5em] mt-1 dark:bg-zinc-800 sm:dark:bg-zinc-700 rounded">
              {/* ${flight.Price.TotalPrice} */}
            </div>
          </div>

          <div className="dark:bg-zinc-800 bg-zinc-300 mt-2 sm:dark:bg-zinc-700 dark:shadow-xl shadow-md rounded sm:w-[5.5em] sm:h-[1.5em] skeleton-box h-[2em] w-full"></div>
        </div>
      </div>
    </div>
  );
}
