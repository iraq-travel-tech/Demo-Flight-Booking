import { useRef } from "react";
import { useState } from "react";

export default function FlightSearchInput({
  placeholder,
  Value,
  EndIcon,
  setValue,
}) {
  const [focused, setFocused] = useState(false);
  const Input = useRef();
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        ref={Input}
        className={`w-full rounded-lg py-3 pl-5 pr-12 bg-white border-2 border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 `}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p
        className={`absolute top-3 left-5 text-zinc-400 px-1 ${
          focused || Value !== "" ? "!text-blue-600 !-top-3 !left-4" : ""
        } transition-all capitalize bg-white    `}
        onClick={() => Input.current.focus()}
      >
        {placeholder}
      </p>

      <div
        className={`absolute right-0 top-3.5 mr-4
        ${focused && "!fill-blue-600"} fill-zinc-400
        `}
      >
        <EndIcon size={21} className="fill-inherit" />
      </div>
    </div>
  );
}
