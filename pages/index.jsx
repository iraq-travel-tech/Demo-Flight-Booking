import FlightSearchContainer from "@/components/home/FlightSearchContainer";
import FlightTicketComponent from "@/components/home/FlightTicketComponent";
import { useState } from "react";

export default function index() {
  const [data, setData] = useState(null);

  return (
    <div>
      <FlightSearchContainer setData={setData} />
      <div className="flex flex-col">
        <div className="mt-2">
          <div className="rounded-xl py-3 px-5 flex flex-col overflow-hidden mx-auto max-w-4xl gap-3">
            {data &&
              data.data.FlightOfferingsResponse.FlightOfferings.FlightOffering.map(
                (offer, index) => (
                  <FlightTicketComponent
                    key={index}
                    flight={offer}
                    index={index}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
