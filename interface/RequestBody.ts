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
          "@type": string;
          From: {
            value: string;
          };
          To: {
            value: string;
          };
        }
      ];
      SearchModifiersAir: {
        "@type": string;
        CarrierPreference: {
          "@type": string;
          type: string;
          carriers: string[];
        };
      };
      PseudoCityInfo: {
        value: string;
      };
    };
  }
  
  