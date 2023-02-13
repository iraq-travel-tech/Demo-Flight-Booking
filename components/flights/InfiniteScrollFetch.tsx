"use client";

import { BASEURL } from "@/GlobalVars";
import React, { useEffect, useState } from "react";

export default function InfiniteScrollFetch({
  from,
  to,
  adults,
  children,
  babies,
  tripclass,
  departure,
  returndate,
}) {
  const FetchData = async () => {
    const res = await fetch(`${BASEURL}/api/flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from,
        to: to,
        adults: adults,
        children: children,
        babies: babies,
        tripclass: tripclass,
        departure: departure,
        returndate: returndate,
      }),
    });
    const data = await res.json();
    console.log(from, to);
  };

  return (
    <>
      <button
        onClick={FetchData}
        className="bg-indigo-600 font-bold p-2 rounded-lg active:bg-indigo-700 "
      >
        load more flights
      </button>
    </>
  );
}
