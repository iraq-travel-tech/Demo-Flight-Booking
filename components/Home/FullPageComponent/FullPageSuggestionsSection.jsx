import { FaPlaneDeparture } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function FullPageSuggestionsSection({
  airports,
  FocusedOn,
  setFrom,
  setFromSelected,
  setTo,
  setToSelected,
}) {
  return (
    <div className="">
      <div
        className={`sticky top-0 left-0 w-full p-3 font-bold capitalize dark:bg-zinc-800 bg-zinc-200 border-t border-zinc-400 transition-all z-10 
      ${FocusedOn && "!text-sm !py-2 font-normal "}
      `}
      >
        suggestions
      </div>
      <div className="flex flex-col gap-1 mt-1  h-full">
        {airports &&
          airports.map((i, index) => (
            <motion.button
              onClick={() => {
                FocusedOn === "from"
                  ? (setFrom(i.iata), setFromSelected(true))
                  : (setTo(i.iata), setToSelected(true));
              }}
              layout
              animate={{
                opacity: [0, 1],
              }}
              exit={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.1,
              }}
              key={`${index}-${i.iata}}`}
              className="py-3 gap-3 border-b px-2 items-center flex justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 relative "
            >
              <div className="flex gap-3 items-center">
                <div className="self-start">
                  <FaPlaneDeparture size={22} className="fill-blue-600" />
                </div>
                <div className="flex text-left flex-col flex-wrap">
                  <div className="font-bold truncate xs:w-full transition-all w-40 ">
                    {i.name}
                  </div>
                  <div
                    className="text-xs xs:w-full
w-40 text-zinc-400"
                  >
                    {i.country} - {i.city}
                  </div>
                </div>
              </div>

              <div className="rounded bg-blue-600 text-white p-2 w-max h-max font-bold text-xs">
                {i.iata}
              </div>
            </motion.button>
          ))}
      </div>
    </div>
  );
}
