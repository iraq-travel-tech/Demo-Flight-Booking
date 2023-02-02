import { useState, useEffect } from "react";
import { getFlightsCatalogue } from "@/pages/api/tpFlights";
import { FlightOfferingsResponse } from "@/interface";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";
import FlightSearchContainer from "@/components/home/FlightSearchContainer";
import FlightTicketComponent from "@/components/home/FlightTicketComponent";

export default function index() {

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
      <FlightSearchContainer />
      <div className="flex flex-col">
        <div className="rounded-xl p-3 flex flex-col mx-auto max-w-4xl w-full overflow-hidden gap-4">
          {offers &&
            offers.map((offer, index) => (
              <FlightTicketComponent key={index} flight={offer} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
