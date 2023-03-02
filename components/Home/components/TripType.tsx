import { motion } from "framer-motion";

export default function TripType({ Texts, setSelectedType, SelectedType }) {
  return (
    <div className="rounded-xl text-sm dark:bg-zinc-800 bg-white p-2 shadow-xl flex gap-2">
      {[Texts?.oneway, Texts?.round].map((i, index) => (
        <button
          className={`p-2 relative flex-1`}
          key={index}
          onClick={() => setSelectedType(index)}
        >
          <span
            className={`relative z-10 capitalize ${
              SelectedType === index && "!text-white"
            } text-black dark:text-white transition-all font-bold`}
          >
            {i}
          </span>
          {SelectedType === index && (
            <motion.div
              layoutId="3664783"
              className={`absolute w-full h-full rounded-xl top-0 left-0 ${
                SelectedType === index && "bg-blue-600"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
