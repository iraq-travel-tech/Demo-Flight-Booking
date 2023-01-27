const axios = require('axios');

export function getFlightsCatalogue(){
    axios.post(
        'https://uapi-search-microservice-f4.ew.r.appspot.com/catalogofferings/',
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
                        'departureDate': '2023-01-25',
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
            }
        }
    ).then(resp => {
    
        console.log(resp.data);
    });
    
}

export function getFlightsCatalogue2(){
     fetch(`${process.env.BASE_API_URL}/catalogofferings`, {method: 'POST', body: JSON.stringify(exmaple_body), mode: 'no-cors', headers: {'Content-Type': 'application/json'}}) 
    .then((response) => response.json())
    .then((data) => console.log(data))
    return;
};

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
		"departureDate" : "2023-01-26",
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