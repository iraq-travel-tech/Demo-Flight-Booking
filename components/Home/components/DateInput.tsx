"use client";
import { MdOutlineDateRange } from "react-icons/md";
import { getDate } from "../HomeSearch";

export default function DateInput({
  SelectedType,
  TwoWaysTripDate,
  OneWayStartDate,
  setShowDatePicker,
  Texts,
}) {
  return (
    <div
      onClick={() => setShowDatePicker(true)}
      className="flex-1 cursor-pointer rounded-xl border dark:hover:bg-zinc-700  p-5 bg-white active:bg-zinc-200 text-zinc-500 flex gap-4 font-semibold relative items-center mt-4 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-200"
    >
      <MdOutlineDateRange size={22} />
      {SelectedType === 0 && (
        <>{OneWayStartDate ? OneWayStartDate : Texts?.date}</>
      )}
      {SelectedType === 1 && (
        <>
          {TwoWaysTripDate[0].endDate
            ? `${getDate(TwoWaysTripDate[0].startDate)} - ${getDate(
                TwoWaysTripDate[0].endDate
              )}`
            : Texts?.date}
        </>
      )}
    </div>
  );
}
