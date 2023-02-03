import { DateRange, Calendar } from "react-date-range";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

export const TheDateComponent = ({
  SelectedType,
  setOneWayStartDate,
  TwoWaysTripDate,
  setTwoWaysTripDate,
  setCloseDatePicker,
}) => {
  const handleSelect = (date) => {
    setOneWayStartDate(new Date(date).toISOString().slice(0, 10));
  };

  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: 0,
        }}
        onClick={() => setCloseDatePicker(false)}
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
        className="w-full bottom-0 max-w-2xl -translate-x-[50%] left-[50%] fixed z-50 flex flex-col bg-zinc-200 px-5 py-3 rounded-xl"
      >
        {/* <div className="w-3/6 bg-zinc-500 mx-auto rounded-full h-2 mb-4"></div> */}

        <nav className="justify-between text-lg items-center py-3 border-b border-zinc-300 flex">
          <div className="capitalize">Select your trip</div>

          <div
            onClick={() => setCloseDatePicker(false)}
            className="w-10 h-10 cursor-pointer hover:bg-zinc-300 active:scale-95 transition-all bg-white rounded-full flex items-center justify-center"
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
              console.log(TwoWaysTripDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={TwoWaysTripDate}
          />
        )}
      </motion.div>
    </>
  );
};
