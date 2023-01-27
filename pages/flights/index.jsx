import React, { useState } from "react";

export default function index() {
  return (
    <div>
      <div className="sm:h-[10em] h-[20em] transition-all bg-blue-500 sm:rounded-b-[20%] rounded-b-3xl z-10 w-full relative"></div>

      <div className="xl:max-w-6xl sm:mt-0 mt-3 lg:max-w-4xl sm:max-w-3xl sm:py-4 px-4 py-5 md:mx-auto sm:mx-10 transition-all mx-7 bg-white relative rounded-xl shadow-xl sm:gap-2 flex flex-col sm:-top-12 -top-[5.6em] z-20">
        <div className="relative z-20 text-xl font-bold">Filters</div>

        <div className="flex mt-2 gap-4">
          <div className="rounded-xl bg-blue-100 w-full">
            <label htmlFor="date" className="p-3">
              Date
            </label>
            <input
              name="date"
              type="date"
              className="p-3 bg-inherit rounded-xl"
            />
          </div>
          <div className="rounded-xl bg-blue-100 w-full">
            <label htmlFor="passengers" className="p-3">
              Passengers
            </label>
            <input
              name="passengers"
              type="number"
              className="p-3 bg-inherit rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
