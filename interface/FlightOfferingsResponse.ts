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
