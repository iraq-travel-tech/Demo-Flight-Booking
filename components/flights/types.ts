import FlightOfferingsResponse from "../interface/Res";

export type SearchParamsProps = {
  from: string;
  to: string;
  tripclass: string;
  departure: string;
  returndate: string | undefined;
  adults: number;
  children: number;
  babies: number;
};
export type FlightsPageProps = {
  searchParams: SearchParamsProps;
};
export type OfferingsProps = {
  data: FlightOfferingsResponse;
};
