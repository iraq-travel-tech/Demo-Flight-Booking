import { motion, useAnimation } from "framer-motion";

export default function TripType({ setSelectedType, SelectedType }) {
  return (
    <div className="rounded-xl text-sm bg-white p-2 shadow-xl flex gap-2">
      {["one way trip", "round trip"].map((i, index) => (
        <button
          className={`p-2 relative flex-1`}
          key={i}
          onClick={() => setSelectedType(index)}
        >
          <span
            className={`relative z-10 capitalize ${
              SelectedType === index && "!text-white"
            } text-black transition-all font-bold`}
          >
            {i}
          </span>
          {SelectedType === index && (
            <div
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
