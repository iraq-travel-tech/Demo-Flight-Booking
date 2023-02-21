import { GET_flights } from "@/components/apiFunctions/getFlights";
import { FlightsResponse } from "@/components/apiFunctions/ResponseTypes";
import { SearchParamsProps } from "@/components/flights/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    adults = 1,
    babies = 0,
    children = 0,
    from,
    to,
    departure,
    returndate = null,
    tripclass = "economy",
    currencyCode = "USD",
  }: SearchParamsProps = req.query;

  switch (req.method) {
    case "GET":
      if (!from || !to)
        res.status(400).json({ error: "Missing from or to parameters" });

      if (req.method === "GET") {
        const Flights: FlightsResponse = await GET_flights({
          from,
          to,
          adults,
          departure,
          currencyCode,
          babies,
          children,
          returndate,
          tripclass,
        });

        if (Flights.FlightOfferingsResponse) {
          res
            .status(200)
            .json(
              Flights.FlightOfferingsResponse.FlightOfferings.FlightOffering
            );
        } else {
          res.status(404).json({
            error: "Could not find flights",
          });
        }
      }
      break;

    default:
      break;
  }
};
