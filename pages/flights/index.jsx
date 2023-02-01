import FlightTicketComponent from "../../components/home/FlightTicketComponent";

export default function index({ data }) {
  return (
    <div className="mt-24">
      <div className="rounded-xl p-3 flex flex-col overflow-hidden mx-auto max-w-4xl">
        {data &&
          data.data.FlightOfferingsResponse.FlightOfferings.FlightOffering.map(
            (offer, index) => (
              <FlightTicketComponent key={index} flight={offer} index={index} />
            )
          )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const {
    from,
    to,
    passengers,
    class: flightClass,
    date,
    return: isReturn,
  } = query;

  // console.log(process.env.NODE_ENV);
  const Url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://travel-website-mu.vercel.app";

  const res = await fetch(`${Url}/api/flights`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ from: from, to: to }),
  });

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
