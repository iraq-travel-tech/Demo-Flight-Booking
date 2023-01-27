const axios = require('axios');
 
export function getFlightsCatalogue(){
    axios.post(
        `${process.env.BASE_API_URL}/catalogofferings/`,
        // '{ "CatalogOfferingsRequestAir" : { "offersPerPage" : 5, "PassengerCriteria" : [ { "value" : "ADT", "number" : 1 } ], "SearchCriteriaFlight" : [ { "@type" : "SearchCriteriaFlight", "departureDate" : "2023-01-25", "From" : { "value" : "BGW" }, "To" : { "value" : "IST" } } ] } }',
        {
            'CatalogOfferingsRequestAir': {
                'offersPerPage': 5,
                'PassengerCriteria': [
                    {
                        'value': 'ADT',
                        'number': 1
                    }
                ],
                'SearchCriteriaFlight': [
                    {
                        '@type': 'SearchCriteriaFlight',
                        'departureDate': '2023-01-29',
                        'From': {
                            'value': 'BGW'
                        },
                        'To': {
                            'value': 'IST'
                        }
                    }
                ]
            }
        },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'
        }
    ).then((resp) => {
        console.log(resp.data);
    });
    
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
		"departureDate" : "2023-01-30",
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