export default function handler(req, res) {
  const { from, to, date, passengers } = req.body;
  if (!from || !to || !passengers) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  if (req.method === "POST") {
    try {
      fetch(`${process.env.api_endpoint}/flightofferings/`, {
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
                number: 1,
              },
            ],
            SearchCriteriaFlight: [
              {
                "@type": "SearchCriteriaFlight",
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
        .then((ress) => ress.json())
        .then((data) => {
          res.json({
            data,
          });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  }
}
