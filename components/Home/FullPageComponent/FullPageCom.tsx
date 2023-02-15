"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BASEURL } from "@/GlobalVars";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import FullPageNavBar from "./FullPageNavBar";
import FullPageSuggestionsSection from "./FullPageSuggestionsSection";
type airportsProps = {
  item: {
    name: string;
    city: string;
    country: string;
    iata: string;
  };
}[];

export const FullPageCom = ({ setFrom, setTo, From, To, setShowFullPage }) => {
  const [airports, setAirports] = useState<airportsProps | null>();
  const [FocusedOn, setFocusedOn] = useState("");
  const [fromSelected, setFromSelected] = useState(false);
  const [toSelected, setToSelected] = useState(false);
  const FromRef = React.useRef<HTMLInputElement>(null);
  const ToRef = React.useRef<HTMLInputElement | null>(null);

  const DataFetch = async (e, setData, inputFocused) => {
    setData(e.target.value);
    setTimeout(async () => {
      const res = await fetch(
        `${BASEURL}/api/airportsearch?query=${e.target.value}`
      );
      const data = await res.json();
      setAirports(data.searchResults);
    }, 500);
  };

  const onInputBlur = (inputFocusedOn: "from" | "to") => {
    if (inputFocusedOn === "from" && !fromSelected) {
      setFrom("");
    } else if (inputFocusedOn === "to" && !toSelected) {
      setTo("");
    }

    setTimeout(() => {
      setFocusedOn("");
    }, 300);
  };

  return (
    <motion.div
      animate={{
        top: [300, 0],
        opacity: [0, 1],
      }}
      exit={{
        top: 300,
        opacity: 0,
      }}
      transition={{
        type: "just",
      }}
      className="w-full top-0 dark:bg-zinc-900 dark:text-white left-[50%] h-screen max-w-2xl -translate-x-[50%] fixed z-50 flex flex-col bg-white px-5 "
    >
      <FullPageNavBar setShowFullPage={setShowFullPage} />

      <AnimatePresence>
        <div>
          <div className="flex relative z-20 flex-col gap-3 pt-5">
            {FocusedOn !== "to" && (
              <FromInput
                DataFetch={DataFetch}
                setFrom={setFrom}
                setFromSelected={setFromSelected}
                From={From}
                FromRef={FromRef}
                onInputBlur={onInputBlur}
                setFocusedOn={setFocusedOn}
              />
            )}

            {FocusedOn !== "from" && (
              <ToInput
                DataFetch={DataFetch}
                setTo={setTo}
                setToSelected={setToSelected}
                To={To}
                ToRef={ToRef}
                onInputBlur={onInputBlur}
                setFocusedOn={setFocusedOn}
              />
            )}
          </div>

          <motion.div
            layout
            className="h-[30em] mt-3 overflow-y-scroll overflow-x-hidden scrollbar-thin dark:scrollbar-thumb-zinc-700 scrollbar-thumb-zinc-300  scrollbar-track-blue-300/0 scrollbar-thumb-rounded-full"
          >
            <FullPageSuggestionsSection
              airports={airports}
              FocusedOn={FocusedOn}
              setFrom={setFrom}
              setFromSelected={setFromSelected}
              setTo={setTo}
              setToSelected={setToSelected}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
