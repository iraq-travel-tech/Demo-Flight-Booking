"use client";
import { motion } from "framer-motion";
import { LocaleType } from "@/app/i18n/locales2/localeType";
import { FlightOfferingEntity } from "@/components/apiFunctions/ResponseTypes";
import FlightTicketCard from "@/components/flights/FlightTicketCard";
import { useState } from "react";

function rearrangeByCheapestPrice(flightOfferingEntities) {
  return flightOfferingEntities.sort(
    (a, b) => a.Price.TotalPrice - b.Price.TotalPrice
  );
}

function rearrangeByShortestDuration(flightOfferingEntities) {
  return flightOfferingEntities.sort((a, b) => {
    const aDuration = Number(a.totalDuration.id.replace(/[^0-9]/g, ""));
    const bDuration = Number(b.totalDuration.id.replace(/[^0-9]/g, ""));
    return aDuration - bDuration;
  });
}

function rearrangeByMostStops(flightOfferingEntities) {
  return flightOfferingEntities.sort((a, b) => b.totalStops - a.totalStops);
}

export default function AllFlights({
  data,
  texts,
  lang,
}: {
  data: FlightOfferingEntity[] | null;
  texts: LocaleType | null;
  lang: string;
}) {
  const [Data, setData] = useState(data);
  const [sortBy, setSortBy] = useState("");

  const handleSortByCheapestPrice = () => {
    if (Data) {
      const sortedData = rearrangeByCheapestPrice(Data);
      setData([...sortedData]);
      setSortBy("cheapest");
    }
  };

  const handleSortByShortestDuration = () => {
    if (Data) {
      const sortedData = rearrangeByShortestDuration(Data);
      setData([...sortedData]);
      setSortBy("shortest");
    }
  };

  const handleSortByMostStops = () => {
    if (Data) {
      const sortedData = rearrangeByMostStops(Data);
      setData([...sortedData]);
      setSortBy("most");
    }
  };

  return (
    <>
      <div className="flex gap-3 overflow-x-scroll">
        <div
          className={`dark:bg-zinc-900/80 min-w-max bg-zinc-300 border border-zinc-400 dark:border-zinc-700 py-2 px-3 cursor-pointer dark:hover:bg-zinc-900 transition-all rounded-full active:scale-95 dark:font-bold capitalize
          ${sortBy === "cheapest" && "!bg-blue-600 !text-white"}
          `}
          onClick={handleSortByCheapestPrice}
        >
          cheapest price
        </div>
        <div
          className={`dark:bg-zinc-900/80 min-w-max bg-zinc-300 border border-zinc-400 dark:border-zinc-700 py-2 px-3 cursor-pointer dark:hover:bg-zinc-900 transition-all rounded-full active:scale-95 dark:font-bold capitalize
          ${sortBy === "shortest" && "!bg-blue-600 !text-white !border-none"}
          `}
          onClick={handleSortByShortestDuration}
        >
          shortest duration
        </div>
        <div
          className={`dark:bg-zinc-900/80 min-w-max bg-zinc-300 border border-zinc-400 dark:border-zinc-700 py-2 px-3 cursor-pointer dark:hover:bg-zinc-900 transition-all rounded-full active:scale-95 dark:font-bold capitalize
          ${sortBy === "most" && "!bg-blue-600 !text-white !border-none"}
          `}
          onClick={handleSortByMostStops}
        >
          most stops
        </div>
      </div>

      <div className="flex mt-5 flex-col gap-10">
        {Data?.map((flight, index: number) => (
          <FlightTicketCard
            key={index}
            texts={texts}
            lang={lang}
            flight={flight}
          />
        ))}
      </div>
    </>
  );
}
