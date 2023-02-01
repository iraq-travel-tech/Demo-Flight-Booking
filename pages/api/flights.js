export default function handler(req, res) {
  if (req.method === "POST") {
    fetch(`${process.env.BASE_API_URL}/flightofferings/`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(searchBody(req.body.from, req.body.to)),
    })
      .then((res) => res.json())
      .then((data) => res.status(200).json({ data    }));
  }
}

const searchBody = (from, to) => ({
  CatalogOfferingsRequestAir: {
    offersPerPage: 5,
    PassengerCriteria: [
      {
        value: "ADT",
        number: 1,
      },
    ],
    SearchCriteriaFlight: [
      {
        "@type": "SearchCriteriaFlight",
        departureDate: "2023-02-15",
        From: {
          value: from,
        },
        To: {
          value: to,
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
