export interface FlightsResponse {
  FlightOfferingsResponse: FlightOfferingsResponse;
}
export interface FlightOfferingsResponse {
  FlightOfferings: FlightOfferings;
}
export interface FlightOfferings {
  FlightOffering?: FlightOfferingEntity[] | null;
}
export interface FlightOfferingEntity {
  validatingCarrier: CarrierOrValidatingCarrier;
  cabin: string;
  Price: Price;
  totalDuration: LocationOrDurationOrTotalDuration;
  totalStops: number;
  Departure: DepartureOrArrival;
  Arrival: DepartureOrArrival;
  flightSegments?: FlightSegmentsEntity[];
}
export interface CarrierOrValidatingCarrier {
  id: string;
  logo: string;
  en: string;
  ar: string;
}
export interface Price {
  currencyCode: string;
  Base: number;
  TotalTaxes: number;
  TotalPrice: number;
}
export interface LocationOrDurationOrTotalDuration {
  id: string;
  en: string;
  ar: string;
}
export interface DepartureOrArrival {
  location: LocationOrDurationOrTotalDuration;
  date: string;
  time: string;
}
export interface FlightSegmentsEntity {
  sequence: number;
  connectionDuration?: string;
  boundFlightsInd?: boolean;
  Flight: Flight;
}
export interface Flight {
  id: string;
  distance: number;
  duration: LocationOrDurationOrTotalDuration;
  carrier: CarrierOrValidatingCarrier;
  number: string;
  operatingCarrier?: string | null;
  equipment?: string[] | null;
  Departure: DepartureOrArrival;
  Arrival: DepartureOrArrival;
}
