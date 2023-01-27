import { useEffect, useState } from "react";
import { RiPlaneLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function test() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/flights")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-20">
      {" "}
      <div className="flex max-w-[50em] overflow-hidden sm:mx-10 mx-2 flex-col">
        {Data &&
          Data.map((flight, index) => (
            <div className="p-3 bg-white border-b border-dashed rounded-xl relative">
              {index > 0 && (
                <div>
                  <div className="absolute h-10 w-10 -left-5 bg-[#ECF2FA] rounded-full -top-5"></div>
                  <div className="absolute h-10 w-10 -right-5 bg-[#ECF2FA] rounded-full -top-5"></div>
                </div>
              )}

              <div className="w-full h-full ticket-grid">
                <img
                  src={flight.airline.logo}
                  className="el-1 sm:flex hidden    sm:w-[5em] object-contain sm:h-[5em] w-[2em] h-[2em] "
                ></img>

                <div className="el-2 flex sm:flex-col flex-col-reverse text-center">
                  <div className="sm:text-2xl sm:text-black text-zinc-500">
                    JFK
                  </div>
                  <div className="text-zinc-700 sm:text-base text-xl font-bold sm:font-normal">
                    13:00
                  </div>
                </div>
                <div className="el-3 flex flex-col text-center">
                  <div className="flex mt-4 sm:hidden relative">
                    <RiPlaneLine className="rotate-90 fill-zinc-600 absolute left-[50%] -translate-x-[50%] top-[1%] z-20 w-5 h-5" />
                    <svg className="relative z-10" height={20} width={80}>
                      <path
                        d="M10 10 L 90 10"
                        stroke="black"
                        stroke-width="1"
                        stroke-dasharray="5,5"
                      />
                    </svg>
                  </div>
                  <div className="text-sm uppercase text-zinc-700 sm:flex hidden">
                    EMARETS airline
                  </div>
                  <div className="sm:text-yellow-600 uppercase text-zinc-600 sm:text-base text-sm font-semibold">
                    11h 20m
                  </div>

                  <div className="uppercase  sm:text-sm text-xs text-zinc-700">
                    non-stop
                  </div>
                </div>

                <div className="el-4 flex sm:flex-col flex-col-reverse text-center">
                  <div className="sm:text-2xl sm:text-black text-zinc-500">
                    BOM
                  </div>
                  <div className="text-zinc-700 sm:text-base text-xl font-bold sm:font-normal">
                    14:20
                  </div>
                </div>

                <div className="transition-all el-5 items-center flex justify-between sm:justify-center w-8/12">
                  <div className="flex sm:hidden items-center">
                    <img
                      src={flight.airline.logo}
                      className="object-contain w-[2em] h-[2em] "
                    ></img>
                    <p className="text-xs">Qatar Planes</p>
                  </div>
                  <div className="sm:text-3xl text-xl transition-all sm:font-normal font-semibold sm:text-black text-zinc-600 ">
                    250$
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
