interface FlightOfferingsResponse {
    FlightOfferingsResponse: FlightOfferingsResponse;
  }
  interface FlightOfferingsResponse {
    FlightOfferings: FlightOfferings;
  }
  
  export interface FlightOfferings {
    FlightOffering: FlightOffering[];
  }
  
  export interface FlightOffering {
    distance: number;
    duration: string;
    carrier: string;
    number: string;
    departureLocation: string;
    departureDate: string;
    departureTime: string;
    arrivalLocation: string;
    arrivalDate: string;
    arrivalTime: string;
  }

  export default FlightOfferingsResponse;
 