"use client";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

export default function FromAndTo({ Texts, setShowFullPage, From, To }) {
  return (
    <motion.div layoutId="fromInputId" className="flex flex-col">
      <div
        onClick={() => setShowFullPage(true)}
        className="flex-1 rounded-t-xl border p-5 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 text-zinc-500 flex gap-4 cursor-pointer active:bg-zinc-200 transition-all font-semibold relative hover:bg-zinc-200 items-center mt-10 capitalize"
      >
        <FaPlaneDeparture size={18} />

        {From ? From : Texts?.from}
      </div>
      <div
        onClick={() => setShowFullPage(true)}
        className="flex-1 cursor-pointer active:bg-zinc-200 transition-all rounded-b-xl border p-5 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 text-zinc-500 flex gap-4 font-semibold hover:bg-zinc-200 items-center relative capitalize"
      >
        <FaPlaneArrival size={18} />

        {To ? To : Texts?.to}
      </div>
    </motion.div>
  );
}
