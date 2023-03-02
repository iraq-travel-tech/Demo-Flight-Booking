"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowsRightLeft } from "react-icons/hi2";
import SwitchThemeButton from "@/components/layouts/SwitchThemeButton";

const getDateInTextFormat = (date) => {
  return `${new Date(date).toLocaleString("default", {
    month: "short",
    day: "numeric",
  })}`;
};

export default function RootLayout({ children }) {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const adults = searchParams.get("adults");
  const childs = searchParams.get("children");
  const babies = searchParams.get("babies");
  const tripclass = searchParams.get("tripclass");
  const departure = searchParams.get("departure");
  const returndate = searchParams.get("returndate");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="fixed w-full left-[50%] max-w-2xl -translate-x-[50%] top-0  z-40   rounded-b-xl h-20 shadow-xl">
        <motion.div
          layoutId="navbarLayout"
          className="absolute inset-0 bg-blue-600 dark:bg-zinc-900 top-0 left-0 -z-10 rounded-b-xl"
        ></motion.div>

        <nav className="p-4 flex justify-between items-center text-white ">
          <motion.div
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.5,
            }}
            className="flex items-center gap-3"
          >
            <div>
              <Link
                href={"/"}
                className="text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer dark:hover:bg-zinc-800 hover:bg-white/30 "
              >
                <IoArrowBackOutline size={28} />
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="font-bold text-sm flex gap-2 items-center capitalize">
                <p>{from}</p>
                {returndate ? (
                  <HiArrowsRightLeft />
                ) : (
                  <IoArrowBackOutline className="rotate-180" />
                )}
                <p>{to}</p>
              </div>

              <div className="text-xs  flex gap-1 text-zinc-200">
                <p className="truncate sm:w-full max-w-[20em] ">
                  {getDateInTextFormat(departure)}{" "}
                  {returndate && "- " + getDateInTextFormat(returndate)} |{" "}
                  {tripclass} |{" "}
                  {parseInt(adults) + parseInt(childs) + parseInt(babies)}{" "}
                  passengers
                </p>
              </div>
            </div>
          </motion.div>
          {/* <SwitchThemeButton /> */}
        </nav>
      </div>
      <div className="flex flex-col gap-4 pt-1 px-2 pb-10">{children}</div>
    </div>
  );
}
