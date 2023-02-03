import { useState } from "react";
import TripFromAndTo from "../components/newHome/TripFromAndTo";
import TripType from "../components/newHome/TripType";

export default function Index() {
  const [SelectedType, setSelectedType] = useState(1);

  return (
    <div className="max-w-2xl mx-auto h-screen">
      <div className="bg-blue-600 dark:bg-zinc-900 rounded-b-xl sm:h-[20em] h-[19em] transition-all w-full">
        <div className="text-white p-4 text-2xl font-bold capitalize relative top-[5.5em] transition-all">
          search for flights
        </div>
      </div>
      <div className="p-4 relative -top-32">
        <TripType
          setSelectedType={setSelectedType}
          SelectedType={SelectedType}
        />
        <TripFromAndTo
          SelectedType={SelectedType}
          setSelectedType={setSelectedType}
        />
      </div>
    </div>
  );
}
