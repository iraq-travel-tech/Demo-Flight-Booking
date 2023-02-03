import { DateRange, Calendar } from "react-date-range";

export const TheDateComponent = ({
  SelectedType,
  setOneWayStartDate,
  TwoWaysTripDate,
  setTwoWaysTripDate,
  setCloseDatePicker,
}) => {
  const handleSelect = (date) => {
    setOneWayStartDate(new Date(date).toISOString().slice(0, 10));
  };

  return (
    <>
      <div
        onClick={() => setCloseDatePicker(false)}
        className="bg-black/50 w-full h-screen max-w-2xl -translate-x-[50%] top-0 left-[50%] fixed z-30"
      ></div>
      <div className="w-full bottom-0 max-w-2xl -translate-x-[50%] left-[50%] fixed z-50 flex flex-col bg-zinc-200 px-5 py-3 rounded-xl">
        <div className="w-3/6 bg-zinc-500 mx-auto rounded-full h-2 mb-4"></div>

        {SelectedType === 0 && (
          <Calendar
            className="w-full"
            date={new Date()}
            onChange={handleSelect}
          />
        )}
        {SelectedType === 1 && (
          <DateRange
            className="w-full"
            editableDateInputs={true}
            onChange={(item) => {
              setTwoWaysTripDate([item.selection]);
              console.log(TwoWaysTripDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={TwoWaysTripDate}
          />
        )}
      </div>
    </>
  );
};
