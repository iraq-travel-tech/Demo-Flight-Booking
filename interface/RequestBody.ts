export interface CatalogOfferingsRequestAir {
  CatalogOfferingsRequestAir: {
    offersPerPage: number;
    PassengerCriteria: [
      {
        value: string;
        number: number;
      }
    ];
    SearchCriteriaFlight: [
      {
        departureDate: string;
        From: {
          value: string;
        };
        To: {
          value: string;
        };
      }
    ];
    SearchModifiersAir: {
      CarrierPreference: {
        type: string;
        carriers: string[];
      };
    };
    PseudoCityInfo: {
      value: string;
    };

    PricingModifiersAir: {
      currencyCode: "USD";
    };
  };
}

export type RequestProps = {
  CatalogOfferingsRequestAir: {
    PassengerCriteria: [
      {
        age: 0;
        number: 0;
        travelerGeographicLocation: string;
        travelerGeographicLocationType: string;
        value: string;
      }
    ];
    PricingModifiersAir: {
      FareModifiers?: {
        Account: [
          {
            code: [string];
            supplierCode: string;
          }
        ];
      };
      FareSelection?: {
        fareType: string;
        overrideCarrier: string;
        prohibitAdvancePurchaseFaresInd: true;
        prohibitMaxStayFaresInd: true;
        prohibitMinStayFaresInd: true;
        refundableOnlyInd: true;
        validatingCarrier: string;
      };
      currencyCode: string;
    };
    PseudoCityInfo?: {
      providerCode: string;
      value: string;
    };
    SearchCriteriaFlight: [
      {
        From: {
          type?: string;
          value: string;
        };
        To: {
          type?: string;
          value: string;
        };
        departureDate: string;
        departureTime?: string;
        sequence?: 0;
      }
    ];
    SearchModifiersAir: {
      CabinPreference?: [
        {
          cabins: [string];
          type: string;
        }
      ];
      CarrierPreference?: {
        carriers: [string];
        type: string;
      };
      FlightType?: {
        connectionType: string;
        excludeInterlineConnectionsInd: true;
      };
      MaxConnectionDuration?: string;
      MaxLayover?: [
        {
          duration: string;
          type: string;
        }
      ];
      MaxOvernightDuration?: string;
      excludeGround?: boolean;
      prohibitChangeOfAirportInd?: boolean;
    };
    maxNumberOfOffersToReturn?: number;
    offersPerPage: number;
    returnBrandedFaresInd?: true;
  };
};
