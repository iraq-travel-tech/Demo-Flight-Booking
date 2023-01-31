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
    departureLocationCode: string;
    departureLocation: string;
    departureDate: string;
    departureTime: string;
    arrivalLocationCode: string;
    arrivalLocation: string;
    arrivalDate: string;
    arrivalTime: string;
  }

  export default FlightOfferingsResponse;
 