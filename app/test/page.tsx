"use client";

import { FlightsPageProps } from "@/components/flights/types";
import { BASEURL } from "@/GlobalVars";
import { useEffect } from "react";
export const dynamic = "force-dynamic";

export default function page({ searchParams }: FlightsPageProps) {
  useEffect(() => {
    fetch(
      `/api/v2/flights?from=${searchParams.from}&to=${searchParams.to}&adults=${searchParams.adults}&babies=${searchParams.babies}&children=${searchParams.children}&departure=${searchParams.departure}$returndate=${searchParams.returndate}&tripclass=${searchParams.tripclass}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // adults
  // babies
  // children
  // from
  // to
  // departure
  // returndate
  // tripclass

  return (
    <div className="flex flex-col gap-10 pt-24 md:px-4 px-2 pb-10">
      <div className="text-3xl font-bold">this is test page</div>
    </div>
  );
}
