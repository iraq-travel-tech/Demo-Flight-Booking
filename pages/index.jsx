import { useState } from "react";
import TripFromAndTo from "../components/newHome/TripFromAndTo";
import TripType from "../components/newHome/TripType";
import { motion } from "framer-motion";

export default function Index() {
  const [SelectedType, setSelectedType] = useState(1);

  return (
    <div className="max-w-2xl mx-auto h-screen">
      <nav className="rounded-b-xl sm:h-[20em] h-[19em] transition-all w-full relative">
        <motion.div
          layoutId="navbarLayout"
          className="absolute w-full h-full bg-blue-600 dark:bg-zinc-900 top-0 left-0 rounded-b-xl"
        ></motion.div>

        <div className="text-white p-4 text-2xl font-bold capitalize relative top-[5.5em] transition-all">
          search for flights
        </div>
      </nav>

      <motion.div className="p-4 relative -top-32">
        <div>
          <TripType
            setSelectedType={setSelectedType}
            SelectedType={SelectedType}
          />
          <TripFromAndTo
            SelectedType={SelectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </motion.div>
    </div>
  );
}
