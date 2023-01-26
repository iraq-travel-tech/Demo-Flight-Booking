import React from "react";

export default function TopHomePage() {
  return (
    <div className="sm:h-[10em] h-[20em] transition-all bg-blue-500 sm:rounded-b-[20%] rounded-b-3xl -z-10 w-full relative">
      <img
        className="absolute sm:hidden -translate-x-[50%] w-[24em] h-[14em] top-0 left-[50%] object-cover"
        src="/images/plane.png"
      />

      <div className="text-white sm:hidden font-bold absolute bottom-24 left-7 capitalize">
        where would you want to fly?
      </div>
    </div>
  );
}
