import { GET_flights } from "@/components/apiFunctions/getFlights";
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

  if (!from || !to) res.status(400).json({ error: "Could not find flights" });

  const data = await GET_flights({ from, to, adults, departure, currencyCode });
  return res.status(200).json({ result: data });
};
