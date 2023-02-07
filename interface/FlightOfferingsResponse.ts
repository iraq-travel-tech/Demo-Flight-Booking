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
  validatingCarrier: string;
  price:  Price;
  totalDuration: string;
  totalStops: number;
  departure: Departure;
  arrival: Arrival;
  flightSegments: FlightSegment[];
}

export interface Price {
  currencyCode: CurrencyCode;
  Base:         number;
  TotalTaxes:   number;
  TotalPrice:   number;
}

export enum CurrencyCode {
  Gbp = "GBP",
}

export interface FlightSegment {
  type: string;
  id: string;
  sequence: number;
  connectionDuration: string;
  boundFlightsInd: Boolean;
  flight: Flight;
}

export interface Flight {
  type: string ;
  id: string ;
  flightRef: string;
  distance: number;
  stops: number;
  duration: string;
  carrier: string;
  number: string;
  operatingCarrier: string;
  operatingCarrierName: string;
  equipment: string[];
  departure: Departure;
  arrival: Arrival;
  intermediateStop: IntermediateStop[];
}

export interface IntermediateStop {
  value: string;
  duration: string;
}

export interface Departure {
  location: Location;
  date:     Date;
  time:     string;
}

export interface Arrival {
  location: Location;
  date:     Date;
  time:     string;
}

export default FlightOfferingsResponse;

