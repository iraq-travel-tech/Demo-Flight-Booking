export default function handler(req, res) {
  const { from, to, date, passengers } = req.body;

  if (req.method === "POST") {
    fetch(`${process.env.BASE_API_URL}/flightofferings/`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        CatalogOfferingsRequestAir: {
          offersPerPage: 5,
          PassengerCriteria: [
            {
              value: "ADT",
              number: passengers,
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: date,
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
      }),
    })
      .then((res) => res.json())
      .then((data) => res.status(200).json({ data }));
  }
}
