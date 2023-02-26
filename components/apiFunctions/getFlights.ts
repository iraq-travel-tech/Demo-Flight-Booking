import { SearchParamsProps } from "../flights/types";

export const GET_flights = async ({
  from,
  to,
  adults,
  departure,
  currencyCode,
}: SearchParamsProps) => {
  const request = await fetch(
    `https://uapi-search-microservice-f2.ey.r.appspot.com/flightofferings/`,
    {
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
              number: adults,
            },
          ],
          PricingModifiersAir: {
            currencyCode: currencyCode,
          },
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: departure,
              From: {
                value: from?.toLowerCase(),
              },
              To: {
                value: to?.toUpperCase(),
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
    }
  );

  const response = await request.json();

  return response;
};
