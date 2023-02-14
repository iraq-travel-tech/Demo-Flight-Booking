import cors from "cors";

// configure CORS middleware
const corsMiddleware = cors({
  origin: "https://demo.iraqtraveltech.com",
  methods: ["GET", "POST"],
});

import Fuse from "fuse.js";
import { airports } from "./airports";

const airportsLowercase = airports.map((airport) => {
  return {
    name: airport.name.toLowerCase(),
    city: airport.city.toLowerCase(),
    country: airport.country.toLowerCase(),
    iata: airport.iata.toLowerCase(),
  };
});

const fuse = new Fuse(airportsLowercase, {
  keys: ["name", "city", "country", "iata"],
  threshold: 0,
});

export default async (req, res) => {
  corsMiddleware(req, res, () => {
    const { query } = req.query;
    const searchResults = fuse.search(query).slice(0, 10);

    res.json({
      searchResults,
    });
  });
};
