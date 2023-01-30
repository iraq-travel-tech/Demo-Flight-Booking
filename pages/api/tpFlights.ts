
export function getFlightsCatalogue<T>(): Promise<T> {
	return fetch(`${process.env.BASE_API_URL}/catalogofferings/`,
		{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
			body: JSON.stringify(exmaple_body),
		},
	).then(response => {
		if (!response.ok) {
		  throw new Error(response.statusText)
		}
		return response.json() as Promise<T>
	})
}

const exmaple_body = {
	"CatalogOfferingsRequestAir" : {
	"offersPerPage" : 5,
	"PassengerCriteria" : [
	{
		"value" : "ADT",
		"number" : 1
	}
	],
	"SearchCriteriaFlight" : [
	{
	"@type" : "SearchCriteriaFlight",
		"departureDate" : "2023-02-15",
		"From" : 
		{
			"value" : "BGW"
		},
		"To" : 
		{
			"value" : "IST"
		}
	}
	],
	"SearchModifiersAir":
	{
		"@type" : "SearchModifiersAir",
			"CarrierPreference" : 
			{
			"@type" : "CarrierPreference",
				"type" : "Prohibited",
				"carriers" : ["WN"]
			}
		},
		"PseudoCityInfo" : 
		{
			"value" : "PCC"
		}
	}
}

