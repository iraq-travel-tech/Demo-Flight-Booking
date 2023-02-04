import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowsRightLeft } from "react-icons/hi2";

export default function index() {
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

  return (
    <div>
      <div className="fixed w-full left-[50%] max-w-2xl -translate-x-[50%] top-0  z-40   rounded-b-xl h-20 ">
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
                <p>Najaf</p>
                <HiArrowsRightLeft />
                <p>Istanbul</p>
              </div>

              <div className="text-xs flex gap-1 text-zinc-200">
                <p>2023-3-3</p>|<p>Economy class</p>|<p>1 passengers</p>
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
    </div>
  );
}

// export async function getServerSideProps({ query }) {
//   const {
//     from,
//     to,
//     passengers,
//     class: flightClass,
//     date,
//     return: isReturn,
//   } = query;

//   const Url =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://travel-website-mu.vercel.app";

//   const res = await fetch(`${Url}/api/flights`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify({
//       from: from,
//       to: to,
//       date: date,
//       passengers: passengers,
//     }),
//   });

//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
