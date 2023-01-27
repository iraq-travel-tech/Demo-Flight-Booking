import { motion } from "framer-motion";
import TextField_1 from "../inputs/TextField_1";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

export default function FlightOptions({
  TripType,
  setTripType,
  FromTrip,
  setFromTrip,
  ToTrip,
  setToTrip,
  PassengerNumbers,
  setPassengerNumbers,
  TripClass,
  setTripClass,
  tripType,
  tripClass,
  passengerNumber,
  setData,
  Data,
}) {
  const FetchData = () => {
    fetch(
      `/api/flights?from=${FromTrip}&to=${ToTrip}&class=${TripClass}&trip-type=${TripType}&passengers=${PassengerNumbers}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <>
      <div className="sm:-top-12 -top-[5.6em] relative z-20">
        <div className="xl:max-w-6xl lg:max-w-4xl sm:max-w-3xl sm:py-4 sm:hidden p-3 sm:mx-auto mx-7 bg-white relative rounded-xl shadow-xl flex gap-4">
          {["Round Trip", "one way trip"].map((i, index) => (
            <div
              onClick={() => setTripType(index)}
              key={index}
              className={`py-2 px-2 text-black text-center w-full rounded-xl cursor-pointer bg-white transition-all relative ${
                index === TripType && "!text-white"
              }`}
            >
              <span className="z-20 relative">{i}</span>
              {index === TripType && (
                <motion.div
                  layoutId="byrebibnebiwb"
                  className="bg-blue-600 rounded-xl absolute inset-0 z-10"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="xl:max-w-6xl sm:mt-0 mt-3 lg:max-w-4xl sm:max-w-3xl sm:py-4 px-4 py-5 md:mx-auto sm:mx-10 transition-all mx-7 bg-white relative rounded-xl shadow-xl sm:gap-2 flex flex-col">
          <div className="flex sm:flex-col flex-col-reverse gap-3">
            <div className="text-xl capitalize font-semibold text-blue-600 sm:flex hidden">
              Where would you want to fly?
            </div>
            <div className="flex mt-5 sm:mt-0   sm:flex-row flex-col gap-5">
              <select className="bg-zinc-200 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer sm:block hidden">
                {tripType.map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => setTripClass(e.target.value)}
                className="bg-zinc-200 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer"
              >
                {tripClass.map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => setPassengerNumbers(e.target.value)}
                className="bg-zinc-200 sm:bg-white sm:rounded-none rounded-lg p-3  capitalize cursor-pointer"
              >
                {passengerNumber.map((i, index) => (
                  <option key={index} value={i}>
                    {i} passengers
                  </option>
                ))}
              </select>
            </div>

            <div className="flex md:flex-row flex-col gap-5">
              <div className="flex sm:flex-row flex-col flex-1 gap-5">
                <TextField_1
                  EndIcon={FaPlaneDeparture}
                  useStateDta={FromTrip}
                  setUseStateDta={setFromTrip}
                  InputType="text"
                  placeholder="From"
                />
                <TextField_1
                  EndIcon={FaPlaneArrival}
                  useStateDta={ToTrip}
                  setUseStateDta={setToTrip}
                  InputType="text"
                  placeholder="To"
                />
              </div>
            </div>
          </div>

          {/* <Link
            href={`/flights?from=${FromTrip}&to=${ToTrip}&type=${
              TripType === 0 ? "round" : "one-way"
            }&class=${TripClass}&passengers=${PassengerNumbers}`}
            className="sm:w-max py-2 px-4 mt-4 rounded-xl font-bold active:scale-95 active:bg-blue-700 transition-all bg-blue-600 text-white text-center"
          >
            Search for flights
          </Link> */}
          <button
            type="submit"
            onClick={FetchData}
            className="sm:w-max py-2 px-4 mt-4 rounded-xl font-bold active:scale-95 active:bg-blue-700 transition-all bg-blue-600 text-white text-center"
          >
            Search for flights
          </button>
        </div>
      </div>
    </>
  );
}
