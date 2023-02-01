import { RiPlaneLine } from "react-icons/ri";
import { FlightOffering } from "@/interface/FlightOfferingsResponse";

export default function FlightTicketComponent({ flight, index }) {
  let flightData: FlightOffering = flight;
  // console.log(flight);

  return (
    <div className="p-3 bg-white border-b border-dashed rounded-xl relative">
      {index > 0 && (
        <div>
          <div className="absolute h-10 w-10 -left-5 bg-[#ECF2FA] rounded-full -top-5"></div>
          <div className="absolute h-10 w-10 -right-5 bg-[#ECF2FA] rounded-full -top-5"></div>
        </div>
      )}

      <div className="w-full h-full flex items-center justify-between p-2 text-sm">
        <div className="flex flex-col flex-1 text-center items-center">
          <p>{flightData.departureLocationCode}</p>
          {/* <p>{flightData.departureLocation}</p> */}
          <p>{flightData.departureTime}</p>
        </div>
        <div className="flex flex-col flex-1 text-center items-center">
          <p className="text-xs"> {flightData.carrier}</p>
          <p> {flightData.duration}</p>
          <p> non-stop</p>
        </div>
        <div className="flex flex-col flex-1 text-center items-center">
          <p> {flightData.arrivalLocationCode}</p>
          {/* <p> {flightData.arrivalLocation}</p> */}
          <p> {flightData.arrivalTime}</p>
        </div>
      </div>
    </div>
  );
}
