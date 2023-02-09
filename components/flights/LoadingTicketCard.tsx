import { BsArrowRight } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";

export default function LoadingTicketCard() {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 shadow p-4 rounded-xl transition-all flex flex-col gap-3 min-h-[14.7em]`}
    >
      <div className="flex items-center  gap-2">
        <p className="h-6 w-14 dark:bg-zinc-800 bg-zinc-300 skeleton-box rounded"></p>
        <div className="h-10 w-10 flex items-center justify-center rounded-full">
          <BsArrowRight />
        </div>
        <p className="h-6 w-14 dark:bg-zinc-800 bg-zinc-300 skeleton-box rounded"></p>
      </div>

      <div className="bg-zinc-100 flex-1 transition-all dark:bg-zinc-800 dark:shadow-xl p-5 rounded-xl flex sm:flex-row flex-col items-center sm:gap-3">
        <div className="flex flex-col sm:w-max w-full self-start">
          <div className="grid sm:grid-cols-[8em_4em_8em] grid-cols-3 sm:gap-5 gap-2">
            <div className="flex flex-col">
              <div className="w-12 h-5 rounded dark:bg-zinc-700 bg-zinc-300 skeleton-box"></div>
              <div className="w-2/3 h-6 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
              <div className="w-14 h-5 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
            </div>

            <div className="flex items-center flex-col gap-1">
              <div className="h-10 w-10 flex items-center justify-center rounded-full fill-zinc-400 rotate-90 bg-white dark:bg-zinc-700 skeleton-box">
                <RiPlaneFill className="fill-inherit" />
              </div>
              <div className="h-4 w-9 skeleton-box dark:bg-zinc-700 bg-zinc-300 mt-1 rounded"></div>
            </div>

            <div className="flex flex-col justify-self-end">
            <div className="w-12 h-5 rounded dark:bg-zinc-700 bg-zinc-300 skeleton-box"></div>
              <div className="w-20 h-6 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
              <div className="w-14 h-5 bg-zinc-300 rounded skeleton-box mt-2 dark:bg-zinc-700 "></div>
            </div>
          </div>
        </div>

        <div className="sm:flex hidden flex-col gap-2 self-start ml-2">
          <div className="bg-zinc-300 dark:bg-zinc-700 py-2 px-3 rounded-full w-14 skeleton-box h-6"></div>
          <div className="bg-zinc-300 dark:bg-zinc-700 py-2 px-3 rounded-full w-14 skeleton-box h-6"></div>
        </div>
      </div>
    </div>
  );
}
