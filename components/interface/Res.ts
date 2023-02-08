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
  Price: Price;
  totalDuration: string;
  totalStops: number;
  Departure: Departure;
  Arrival: Arrival;
  flightSegments: FlightSegment[];
}

export interface Price {
  currencyCode: CurrencyCode;
  Base: number;
  TotalTaxes: number;
  TotalPrice: number;
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
  type: string;
  id: string;
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
  location: string;
  date: string;
  time: string;
}

export interface Arrival {
  location: string;
  date: string;
  time: string;
}

export default FlightOfferingsResponse;
