import { useRef } from "react";
import { useState } from "react";

export default function PassengersInputField({ Value, setValue }) {
  const [focused, setFocused] = useState(false);
  const InputRef = useRef();
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        ref={InputRef}
        className={`w-full rounded-lg py-2 pl-5 pr-12 bg-white border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 `}
        type="number"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        min={1}
        max={5}
      />

      <p
        onClick={() => InputRef.current.focus()}
        className={`absolute top-2 left-3 text-zinc-400 px-1 ${
          focused || Value !== "" ? "!text-blue-600 !-top-3 !left-4" : ""
        } transition-all capitalize bg-white`}
      >
        Passengers
      </p>
    </div>
  );
}
