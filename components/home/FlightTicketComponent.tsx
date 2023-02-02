import { RiPlaneLine } from "react-icons/ri";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";
import { TbPlaneInflight } from "react-icons/tb";

export default function FlightTicketComponent({ flight, index }) {
  let flightData: FlightOffering = flight;
  // console.log(flight);

  return (
    <div className={`grid pb-2 grid-cols-[auto_1fr_auto]  py-3 px-5 grid-rows-[auto_auto] bg-white rounded-xl shadow w-full max-w-[25em] mx-auto`} >
      <div className="flex items-center text-center flex-col">
        <div className="text-lg font-bold">
          {flightData.departureLocationCode}
        </div>
        <div className="text-zinc-400">{flightData.departureTime}</div>
        <div className="text-zinc-400 text-xs">{flightData.departureDate}</div>
      </div>
      <div className="flex items-center text-center flex-col">
        <div className="text-lg font-bold">
          <TbPlaneInflight size={22} />
        </div>
        <div className="text-zinc-400 text-sm">{flightData.duration}</div>
      </div>
      <div className="flex items-center text-center flex-col">
        <div className="text-lg font-bold">
          {flightData.arrivalLocationCode}
        </div>
        <div className="text-zinc-400">{flightData.arrivalTime}</div>
        <div className="text-zinc-400 text-xs">{flightData.arrivalDate}</div>
      </div>

      <div className="flex justify-between col-span-3 row-start-2 border-t mt-2 pt-1">
        <div className="text-zinc-400">...</div>
        <div className="text-zinc-400">...</div>
      </div>
    </div>
  );
}
