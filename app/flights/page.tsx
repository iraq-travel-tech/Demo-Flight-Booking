import { FlightOfferingEntity } from "@/components/apiFunctions/ResponseTypes";
import FlightFilters from "@/components/flights/FlightFilters";
import FlightTicketCard from "@/components/flights/FlightTicketCard";
import {
  FlightsPageProps,
  SearchParamsProps,
} from "@/components/flights/types";
import { BASEURL } from "@/GlobalVars";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function page({ searchParams }: FlightsPageProps) {
  const res =
    await fetch(`${BASEURL}/api/v2/flights?adults=${searchParams?.adults}
  &from=${searchParams?.from}
  &to=${searchParams?.to}
  &departure=${searchParams?.departure}`);
  let data: FlightOfferingEntity[] | null = null;

  if (res.status !== 404) {
    data = await res.json();
  }

  return (
    <div className="flex flex-col gap-10 pt-24 md:px-4 px-2 pb-10">
      {data ? (
        data.map((flight, index: number) => (
          <FlightTicketCard flight={flight} key={index} />
        ))
      ) : (
        <div className="flex flex-col py-3 sm:px-5 px-4 rounded bg-zinc-200 transition-all dark:bg-zinc-800">
          <div className="text-3xl font-bold">
            could not find flights from {searchParams?.from} to {searchParams?.to}
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
