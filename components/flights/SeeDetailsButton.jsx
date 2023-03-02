"use client";

import { useContext } from "react";
import { ShowDetailsContext } from "./context";

export default function SeeDetailsButton({ texts }) {
  const { showDetails, setShowDetails } = useContext(ShowDetailsContext);

  return (
    <>
      <button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        className="md:transition-all dark:bg-zinc-700 bg-zinc-100 capitalize mt-2 font-bold md:font-normal md:py-1 py-2 px-3  dark:shadow-xl shadow-md text-sm rounded md:w-max w-full text-center active:shadow-none active:scale-95 transition-all"
      >
        {showDetails ? texts.hidestops : texts.showstops}
      </button>
    </>
  );
}
