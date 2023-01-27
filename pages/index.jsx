import TopHomePage from "@/components/other/TopHomePage";
import { useState, useEffect } from "react";
import FlightOptions from "@/components/home/FlightOptions";

export default function index() {
  const [TripType, setTripType] = useState(0);
  const [Data, setData] = useState(null);
  const tripType = ["round trip", "one way trip"];
  const tripClass = ["economy class"];
  const passengerNumber = [1, 2, 3, 4, 5];

  const [FromTrip, setFromTrip] = useState("");
  const [ToTrip, setToTrip] = useState("");
  const [Stops, setStops] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/flights")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <TopHomePage />
      <FlightOptions
        setFromTrip={setFromTrip}
        setToTrip={setToTrip}
        FromTrip={FromTrip}
        ToTrip={ToTrip}
        TripType={TripType}
        setTripType={setTripType}
        tripType={tripType}
        tripClass={tripClass}
        passengerNumber={passengerNumber}
        Stops={Stops}
        setStops={setStops}
      />

      <div className="flex overflow-hidden sm:mx-10 mx-2 flex-col">
        {Data &&
          Data.map((flight, index) => (
            <div className="p-3 bg-white border-b border-dashed flex items-center justify-around rounded-xl relative">
              <div>
                <div className="absolute h-10 w-10 -left-5 bg-[#ECF2FA] rounded-full -top-5"></div>
                <div className="absolute h-10 w-10 -right-5 bg-[#ECF2FA] rounded-full -top-5"></div>
              </div>
              <img
                src={flight.airline.logo}
                className="sm:w-[5em] object-contain sm:h-[5em] w-[2em] h-[2em] "
              ></img>

              <div className="flex flex-col text-center">
                <div className="text-2xl">JFK</div>
                <div className="text-zinc-700">13:00</div>
              </div>
              <div className="flex flex-col text-center">
                <div className="text-sm uppercase text-zinc-700">
                  EMARETS airline
                </div>
                <div className="text-yellow-600 uppercase">11h 20m</div>

                <div className="uppercase text-sm text-zinc-700">non-stop</div>
              </div>

              <div className="flex flex-col text-center">
                <div className="text-2xl">BOM</div>
                <div className="text-zinc-700">14:20</div>
              </div>

              <div className="text-3xl">250$</div>
            </div>
          ))}
      </div>
    </div>
  );
}
