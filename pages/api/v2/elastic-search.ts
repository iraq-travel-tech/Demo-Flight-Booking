import { airports } from "../airports";
import Fuse from "fuse.js";
import { NextApiRequest, NextApiResponse } from "next";

interface Airport {
  name: string;
  city: string;
  country: string;
  iata: string;
}

const airportsLowercase: Airport[] = airports.map((airport) => ({
  name: airport.name.toLowerCase(),
  city: airport.city.toLowerCase(),
  country: airport.country.toLowerCase(),
  iata: airport.iata.toLowerCase(),
}));

const fuseOptions: Fuse.IFuseOptions<Airport> = {
  keys: ["name", "city", "country", "iata"],
  threshold: 1,
};

const fuse = new Fuse(airportsLowercase, fuseOptions);

const searchAirport = (query: string): Airport[] => {
  const searchResults: any = fuse.search(query).slice(0, 10);
  const items: Airport[] = searchResults.map((result) => result.item);
  return items;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ searchResults: Airport[] }>
) => {
  const { query } = req.query;
  const searchResults = searchAirport(query as string);
  res.json({ searchResults });
};
