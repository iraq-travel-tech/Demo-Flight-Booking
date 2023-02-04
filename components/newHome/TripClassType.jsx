import { motion } from "framer-motion";

export default function TripType({ setFlightClass, FlightClass }) {
  return (
    <div className="rounded-xl text-sm dark:bg-zinc-800 bg-white p-2 shadow-xl flex gap-2">
      {["economy", "bussiness"].map((i, index) => (
        <button
          className={`p-2 relative flex-1`}
          key={i}
          onClick={() => setFlightClass(i)}
        >
          <span
            className={`relative z-10 capitalize ${
              FlightClass === i && "!text-white"
            } text-black dark:text-white transition-all font-bold`}
          >
            {i} class
          </span>
          {FlightClass === i && (
            <motion.div
              layoutId="352367265"
              className={`absolute w-full h-full rounded-xl top-0 left-0 ${
                FlightClass === i && "bg-blue-600"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
