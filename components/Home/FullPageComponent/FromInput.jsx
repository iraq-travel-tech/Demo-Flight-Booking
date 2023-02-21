import { motion } from "framer-motion";

import { IoMdAirplane } from "react-icons/io";

export default function FromInput({
  DataFetch,
  setFrom,
  setFromSelected,
  From,
  FromRef,
  onInputBlur,
  setFocusedOn,
}) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.9, 1],
      }}
      exit={{
        opacity: [1, 1],
        scale: [1, 0.9],
      }}
      key="hiypuryiqer"
      layout
      layoutId="jnwerbywrvyuioue"
      className="relative flex items-center p-4 rounded  "
    >
      <input
        ref={FromRef}
        onChange={(e) => {
          DataFetch(e, setFrom, "from");
          setFromSelected(false);
        }}
        onFocus={() => {
          setFocusedOn("from");
        }}
        autoFocus={From ? false : true}
        onBlur={() => onInputBlur("from")}
        value={From}
        type="search"
        className="absolute border border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700  px-2 pl-10 text- top-0 rounded left-0 w-full h-full"
        placeholder="From"
      />
      <IoMdAirplane
        size={20}
        className="fill-zinc-400 -ml-1 relative z-20 rotate-180"
      />
    </motion.div>
  );
}
