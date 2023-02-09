import FlightTicketCard from "@/components/flights/FlightTicketCard";
import { FlightsPageProps } from "@/components/flights/types";

export const dynamic = "force-dynamic";

export default async function page({ searchParams }: FlightsPageProps) {
  const Url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://travel-website-mu.vercel.app";

  const res = await fetch(`${Url}/api/flights`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: searchParams.from,
      to: searchParams.to,
      adults: searchParams.adults,
      children: searchParams.children,
      babies: searchParams.babies,
      tripclass: searchParams.tripclass,
      departure: searchParams.departure,
      returndate: searchParams.returndate,
    }),
  });
  const data = await res.json();

  return (
    <div className="flex flex-col gap-4 pt-24 px-4 pb-10">
      {data.data &&
        data.data.FlightOfferingsResponse.FlightOfferings.FlightOffering.map(
          (i, index) => <FlightTicketCard flight={i} key={index} />
        )}
    </div>
  );
}
