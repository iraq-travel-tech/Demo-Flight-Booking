import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowsRightLeft } from "react-icons/hi2";
import FlightTicketCard from "../../components/flights/FlightTicketCard";

export default function index({ flightQueries, data }) {
  const [DarkTheme, setDarkTheme] = useState(false);
  const SwitchTheme = () => {
    const Body = window.document.body.classList;
    if (Body.contains("dark")) {
      Body.remove("dark");
      setDarkTheme(false);
    } else {
      Body.add("dark");
      setDarkTheme(true);
    }
  };

  const getDateInTextFormat = (date) => {
    return `${new Date(date).toLocaleString("default", {
      month: "short",
      day: "numeric",
    })}`;
  };

  // "BGW", "NJF", "BSR", "EBL", "ISU", "XNH"
  // to: BEY","CAI","KUL","BKK","BAK","TBS"

   console.log(data);
  return (
    <div className="w-full max-w-2xl mx-auto">
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
              <div className="font-bold text-sm flex gap-2 items-center">
                <p>{flightQueries.from}</p>
                <HiArrowsRightLeft />
                <p>{flightQueries.to}</p>
              </div>

              <div className="text-xs  flex gap-1 text-zinc-200">
                <p className="truncate sm:w-full w-[20em] ">
                  {getDateInTextFormat(flightQueries.departure)}{" "}
                  {flightQueries.returndate &&
                    "- " + getDateInTextFormat(flightQueries.returndate)}{" "}
                  | {flightQueries.tripclass} |{" "}
                  {parseInt(flightQueries.adults) +
                    parseInt(flightQueries.children) +
                    parseInt(flightQueries.babies)}{" "}
                  passengers
                </p>
              </div>
            </div>
          </motion.div>

          <div
            onClick={SwitchTheme}
            className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full"
          >
            {!DarkTheme ? (
              <HiOutlineMoon color="white" size={28} />
            ) : (
              <IoIosSunny color="white" size={28} />
            )}
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-4 pt-24 px-4 pb-10">
        {data.data ? (
          data.data.FlightOfferingsResponse.FlightOfferings.FlightOffering.map(
            (flight, index) => (
              <FlightTicketCard
                MainFrom={flightQueries.from}
                MainTo={flightQueries.to}
                flight={flight}
                key={index}
              />
            )
          )
        ) : (
          <div className="flex flex-col dark:bg-zinc-900 dark:text-white p-3 px-4 rounded-xl">
            <div>
              Sorry, we couldn't find any flights matching your criteria. Please
              try changing your travel dates, airports, or number of travelers
              and try again
            </div>
            <Link
              href="/"
              className="rounded mt-4 text-center active:scale-95 transition-all bg-blue-600 text-white font-bold p-3"
            >
              Go back to home page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const {
      from,
      to,
      adults,
      children,
      babies,
      tripclass,
      departure,
      returndate = null,
    } = query;

    const Url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://travel-website-mu.vercel.app";

    const params = {
      from,
      to,
      adults,
      children,
      babies,
      tripclass,
      departure,
      returndate,
    };

    const res = await fetch(`${Url}/api/flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await res.json();

    return {
      props: {
        data,
        flightQueries: {
          from,
          to,
          adults,
          children,
          babies,
          tripclass,
          departure,
          returndate,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
        error: "An error occurred while fetching flight data",
      },
    };
  }
}
