import FlightTicketCard from "@/components/flights/FlightTicketCard";
import { FlightsPageProps } from "@/components/flights/types";
import Link from "next/link";

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
      {data.data ? (
        data.data.FlightOfferingsResponse.FlightOfferings.FlightOffering.map(
          (i, index: number) => <FlightTicketCard flight={i} key={index} />
        )
      ) : (
        <div className="flex flex-col py-3 px-5 rounded bg-zinc-200 transition-all dark:bg-zinc-800">
          <div className="text-3xl font-bold">
            could not find flights from {searchParams.from} to {searchParams.to}
          </div>
          <Link
            href="/"
            className="text-white capitalize mt-4 dark:bg-zinc-700 py-2 px-3 rounded w-max active:scale-95 active:dark:bg-zinc-900  active:bg-blue-700 transition-all bg-blue-600"
          >
            go back to home page
          </Link>
        </div>
      )}
    </div>
  );
}
