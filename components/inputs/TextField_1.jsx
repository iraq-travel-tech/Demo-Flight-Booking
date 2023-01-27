import React, { useState } from "react";

export default function TextField_1({
  useStateDta,
  setUseStateDta,
  placeholder,
  EndIcon,
  InputType,
}) {
  const [HideLabel, setHideLabel] = useState(false);
  return (
    <div className="relative bg-zinc-200 rounded-xl group w-full">
      <input
        required
        className={`border pt-6 py-2 px-3 w-full rounded-xl bg-inherit text-xl focus:outline-none pr-11 h-full`}
        onFocus={() => setHideLabel(true)}
        onBlur={() =>
          useStateDta.length > 0 ? setHideLabel(true) : setHideLabel(false)
        }
        value={useStateDta}
        onChange={(e) => {
          setUseStateDta(e.target.value);
        }}
        type={InputType}
      />
      <div
        className={`absolute left-3 text-xl
        top-4
        text-zinc-500

      ${HideLabel && "!top-1 !left-3 !text-sm !font-bold"}

      font-normal
      transition-all
      capitalize
      `}
      >
        {placeholder}
      </div>

      {EndIcon && (
        <div className="absolute top-5 right-4">
          <EndIcon size={22} className="fill-zinc-400" />{" "}
        </div>
      )}
    </div>
  );
}
