"use client";

import { useContext, useState } from "react";
import { ShowDetailsContext } from "./context";

export default function SeeDetailsButton() {
  const { showDetails, setShowDetails } = useContext(ShowDetailsContext);

  return (
    <>
      <button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        className="sm:transition-all dark:bg-zinc-700   sm:bg-zinc-300 bg-zinc-200 capitalize mt-2 font-bold sm:font-normal sm:py-1 py-2 px-3  dark:shadow-xl shadow-md text-sm rounded sm:w-max w-full text-center active:shadow-none active:scale-95 transition-all"
      >
        {showDetails ? "hide stops" : "show stops"}
      </button>
    </>
  );
}
