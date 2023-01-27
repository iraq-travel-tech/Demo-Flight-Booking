import TopHomePage from "@/components/other/TopHomePage";
import { useState, useEffect } from "react";
import FlightOptions from "@/components/home/FlightOptions";
import { motion } from "framer-motion";
import FlightTicketComponent from "@/components/home/FlightTicketComponent";
import {getFlightsCatalogue} from "@/pages/api/tpFlights"
export default function index() {
  const tripType = ["round trip", "one way trip"];
  const tripClass = ["economy", "business"];
  const passengerNumber = [1, 2, 3, 4, 5];

  const [TripType, setTripType] = useState(0);
  const [Data, setData] = useState(null);
  const [FromTrip, setFromTrip] = useState("");
  const [ToTrip, setToTrip] = useState("");
  const [PassengerNumbers, setPassengerNumbers] = useState(0);
  const [TripClass, setTripClass] = useState("economy");

  const SortOptions = ["cheapest price", "non stop", "under 400$"];
  const [SortOption, setSortOption] = useState("cheapest price");
useEffect(()=>{
  getFlightsCatalogue();
})
  return (
    <div>
      <TopHomePage />
      <FlightOptions
        tripType={tripType}
        tripClass={tripClass}
        passengerNumber={passengerNumber}
        TripType={TripType}
        setTripType={setTripType}
        Data={Data}
        setData={setData}
        FromTrip={FromTrip}
        setFromTrip={setFromTrip}
        ToTrip={ToTrip}
        setToTrip={setToTrip}
        PassengerNumbers={PassengerNumbers}
        setPassengerNumbers={setPassengerNumbers}
        TripClass={TripClass}
        setTripClass={setTripClass}
      />
      <div className="flex flex-col">
        {/* <div className="flex justify-between">
          <select className="bg-zinc-100 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer sm:block hidden">
            {SortOptions.map((i, index) => (
              <option key={index} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div> */}

        <div className="flex overflow-hidden sm:mx-10 mx-2 flex-col">
          {Data &&
            Data.map((flight, index) => (
              <FlightTicketComponent
                key={index}
                flight={flight}
                index={index}
              />
            ))}
        </div>
      </div>{" "}
    </div>
  );
}
