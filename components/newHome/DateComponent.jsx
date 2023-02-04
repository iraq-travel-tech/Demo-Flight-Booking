import { DateRange, Calendar } from "react-date-range";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { getDate } from "./TripFromAndTo";

export const TheDateComponent = ({
  SelectedType,
  setOneWayStartDate,
  TwoWaysTripDate,
  setTwoWaysTripDate,
  setShowDatePicker,
  OneWayStartDate,
}) => {
  const handleSelect = (date) => {
    setOneWayStartDate(getDate(date));
  };


   


  return (
    <>
      <style>
        {window.document.body.classList.contains("dark")
          ? `
              .rdrCalendarWrapper {
                background: #27272a !important;
              }
              .rdrDateDisplayWrapper {
                background: #18181b !important;
              }
              
              .rdrMonthAndYearPickers {
                color: rgb(196, 196, 196) !important;
              }
              .rdrDayNumber span,
              .rdrMonthAndYearPickers * {
                color: rgb(255, 255, 255) !important;
              }
              
              .rdrDateDisplay input {
                background-color: #27272a !important;
                border-color: #27272a !important;
                border-radius: 3px;
              }
              .rdrMonthAndYearWrapper button {
                background-color: rgb(56, 56, 56);
                fill: white !important;
              }
              
              .rdrSelection {
                background: rgb(46, 204, 113) !important;
              }
              .rdrSelection.start,
              .rdrSelection.end {
                background: rgb(255, 255, 255) !important;
              }
              
              .rdrToday {
                background: rgb(46, 204, 113) !important;
                color: rgb(255, 255, 255) !important;
              }
              
              .rdrActive {
                background: rgb(52, 73, 94) !important;
                color: rgb(255, 255, 255) !important;
              }
              `
          : ``}
      </style>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: 0,
        }}
        onClick={() => setShowDatePicker(false)}
        className="bg-black/50 w-full h-screen left-0 top-0 fixed z-30"
      ></motion.div>
      <motion.div
        animate={{
          bottom: [-340, 0],
          opacity: [0, 1],
        }}
        exit={{
          bottom: -340,
          opacity: 0,
        }}
        transition={{
          type: "just",
        }}
        className="w-full bottom-0 max-w-2xl -translate-x-[50%] left-[50%] fixed z-50 flex flex-col dark:bg-zinc-900 dark:text-white bg-zinc-200 px-5 py-3 rounded-t-xl"
      >
        <nav className="justify-between text-lg items-center py-3 border-b border-zinc-300 flex">
          <div className="capitalize">Select your trip</div>

          <div
            onClick={() => setShowDatePicker(false)}
            className="w-10 h-10 cursor-pointer hover:bg-zinc-300 active:scale-95 transition-all bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"
          >
            <MdOutlineClose />
          </div>
        </nav>

        {SelectedType === 0 && (
          <Calendar
            className="w-full"
            date={new Date()}
            onChange={handleSelect}
          />
        )}
        {SelectedType === 1 && (
          <DateRange
            className="w-full"
            editableDateInputs={true}
            onChange={(item) => {
              setTwoWaysTripDate([item.selection]);
            }}
            moveRangeOnFirstSelection={false}
            ranges={TwoWaysTripDate}
          />
        )}

        <motion.div layout className="flex gap-2 mt-3">
          <motion.div
            layout
            className="border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 bg-white  rounded p-3 text-center flex-1"
          >
            <p className="font-bold"> Departure Date </p>

            <p>
              {TwoWaysTripDate[0].endDate ? (
                <>{getDate(TwoWaysTripDate[0].endDate)}</>
              ) : (
                <>{OneWayStartDate}</>
              )}
            </p>
          </motion.div>
          {TwoWaysTripDate[0].endDate && (
            <motion.div
              layout
              className="border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 bg-white  rounded p-3 text-center flex-1"
            >
              <p className="font-bold"> Return date </p>
              <p>{getDate(TwoWaysTripDate[0].endDate)}</p>
            </motion.div>
          )}
      </motion.div>

        <button
          onClick={() => setShowDatePicker(false)}
          className="rounded font-bold
        text-white bg-blue-600 p-2 mt-3 active:scale-95 transition-all active:bg-blue-700"
        >
          Set date
        </button>
      </motion.div>
    </>
  );
};
