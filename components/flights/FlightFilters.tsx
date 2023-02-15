import React from "react";

type Props = {};

export default function FlightFilters({}: Props) {
  return (
    <div>
      {" "}
      <div className="flex gap-3 text-xs w-full overflow-x-scroll">
        <div className="bg-zinc-800 min-w-max p-2 rounded border border-zinc-700">
          cheapest flight
        </div>
        <div className="bg-zinc-800 min-w-max p-2 rounded border border-zinc-700">
          cheapest flight
        </div>
        <div className="bg-zinc-800 min-w-max p-2 rounded border border-zinc-700">
          cheapest flight
        </div>
        <div className="bg-zinc-800 min-w-max p-2 rounded border border-zinc-700">
          cheapest flight
        </div>
      </div>
    </div>
  );
}
