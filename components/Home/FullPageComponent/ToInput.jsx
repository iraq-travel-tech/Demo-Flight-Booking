import { motion } from "framer-motion";

import { HiLocationMarker } from "react-icons/hi";

export default function ToInput({
  DataFetch,
  setTo,
  setToSelected,
  To,
  ToRef,
  onInputBlur,
  setFocusedOn,
  Texts,
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
      key="oihulewbernb"
      layoutId="erbywrvyuioueoierhiy"
      layout
      className="relative flex items-center p-4 rounded  "
    >
      <input
        ref={ToRef}
        onChange={(e) => {
          DataFetch(e, setTo, "to");
          setToSelected(false);
        }}
        onFocus={() => {
          setFocusedOn("to");
        }}
        onBlur={() => onInputBlur("to")}
        value={To}
        className="absolute border border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700  px-10 text- top-0 rounded left-0 w-full h-full"
        type="search"
        placeholder={Texts?.to}
      />
      <HiLocationMarker
        size={20}
        className="fill-zinc-400 -ml-1 relative z-20"
      />
    </motion.div>
  );
}
