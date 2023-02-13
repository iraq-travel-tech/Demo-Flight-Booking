import { CatalogOfferingsRequestAir } from "@/interface/RequestBody";
import { NextApiRequest, NextApiResponse } from "next";

const requestBody = (
  from: string,
  to: string,
  adults: number,
  departure: string
): CatalogOfferingsRequestAir => ({
  CatalogOfferingsRequestAir: {
    offersPerPage: 5,
    PassengerCriteria: [
      {
        value: "ADT",
        number: adults,
      },
    ],
    SearchCriteriaFlight: [
      {
        "@type": "SearchCriteriaFlight",
        departureDate: departure,

        From: {
          value: from.toLocaleUpperCase(),
        },
        To: {
          value: to.toLocaleUpperCase(),
        },
      },
    ],
    SearchModifiersAir: {
      "@type": "SearchModifiersAir",
      CarrierPreference: {
        "@type": "CarrierPreference",
        type: "Prohibited",
        carriers: ["WN"],
      },
    },
    PseudoCityInfo: {
      value: "PCC",
    },
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { from, to, adults, departure } = req.body;

  if (!from || !to) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  if (req.method === "POST") {
    const response = await fetch(
      `${process.env.api_endpoint}/flightofferings/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(requestBody(from, to, adults, departure)),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return res.json({ data });
    } else {
      console.error(await response.text());
      return res.status(500).json({ error: "An error occurred" });
    }
  }
};
