import { useState, useEffect } from "react";
import FlightOptions from "../components/home/FlightOptions";
import { motion } from "framer-motion";
import { getFlightsCatalogue } from "@/pages/api/tpFlights";
import { FlightOfferingsResponse } from "@/interface";
import {
  FlightOfferings,
  FlightOffering,
} from "@/interface/FlightOfferingsResponse";
import FlightTicketComponent from "../components/home/FlightTicketComponent";

export default function index() {
  // console.log(process.env.NODE_ENV);

  var [flightData, setFlightData] = useState<FlightOfferingsResponse>();
  var [offers, setCatalogueOfferings] = useState<FlightOffering[]>();

  useEffect(() => {
    if (!offers) {
      getFlightsCatalogue<FlightOfferingsResponse>()
        .then((response) => {
          setCatalogueOfferings(
            response.FlightOfferingsResponse.FlightOfferings.FlightOffering
          );
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
          /* show error message */
        });
    }
  });

  return (
    <div>
      <FlightOptions />
      <div className="flex flex-col">
        <div className="rounded-xl p-3 flex flex-col mx-auto max-w-4xl w-full overflow-hidden">
          {offers &&
            offers.map((offer, index) => (
              <FlightTicketComponent key={index} flight={offer} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
