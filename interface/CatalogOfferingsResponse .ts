interface CatalogOfferingsResponse {
    CatalogOfferings: CatalogOfferings;
    transactionId:    string;
    Result:           Result;
    ReferenceList:    ReferenceList[];
}

export interface CatalogOfferings {
    id:              string;
    Identifier:      Identifier;
    DefaultCurrency: DefaultCurrency;
    CatalogOffering: CatalogOffering[];
}

export interface CatalogOffering {
    "@type":            string;
    id:                 string;
    ProductOptions:     ProductOption[];
    Price:              Price;
    TermsAndConditions: TermsAndConditions;
}

export interface Price {
    "@type":      string;
    currencyCode: string;
    Base:         number;
    TotalTaxes:   number;
    TotalPrice:   number;
}

export interface ProductOption {
    "@type":  string;
    sequence: number;
    Product:  Product[];
}

export interface Product {
    "@type":         ProductType;
    id:              string;
    totalDuration:   string;
    Quantity:        number;
    FlightSegment:   FlightSegment[];
    PassengerFlight: PassengerFlight[];
}

export enum ProductType {
    ProductAir = "ProductAir",
}

export interface FlightSegment {
    "@type":             FlightSegmentType;
    sequence:            number;
    connectionDuration?: string;
    boundFlightsInd?:    boolean;
    Flight:              FlightSegmentFlight;
}

export enum FlightSegmentType {
    FlightSegment = "FlightSegment",
}

export interface FlightSegmentFlight {
    "@type":   PurpleType;
    FlightRef: string;
}

export enum PurpleType {
    FlightID = "FlightID",
}

export interface PassengerFlight {
    "@type":           PassengerFlightType;
    passengerQuantity: number;
    passengerTypeCode: PassengerTypeCode;
    FlightProduct:     FlightProduct[];
}

export enum PassengerFlightType {
    PassengerFlight = "PassengerFlight",
}

export interface FlightProduct {
    "@type":         FlightProductType;
    segmentSequence: number[];
    classOfService:  string;
    cabin:           Cabin;
    fareBasisCode:   string;
    privateFareInd:  boolean;
    Brand:           Brand;
}

export enum FlightProductType {
    FlightProduct = "FlightProduct",
}

export interface Brand {
    "@type":  BrandType;
    id?:      string;
    BrandRef: string;
    name?:    Name;
    tier?:    number;
}

export enum BrandType {
    Brand = "Brand",
}

export enum Name {
    EconomyClassic = "ECONOMY CLASSIC",
    EconomyPlus = "ECONOMY PLUS",
    EconomySaver = "Economy Saver",
}

export enum Cabin {
    Economy = "Economy",
}

export enum PassengerTypeCode {
    ADT = "ADT",
}

export interface TermsAndConditions {
    "@type":           string;
    validatingCarrier: Carrier;
    ExpiryDate:        Date;
    BaggageAllowance?: BaggageAllowance[];
}

export interface BaggageAllowance {
    "@type":     string;
    ProductRef:  string[];
    BaggageItem: BaggageItem[];
}

export interface BaggageItem {
    "@type":  string;
    quantity: number;
}

export enum Carrier {
    MS = "MS",
    Me = "ME",
    Qr = "QR",
    Rj = "RJ",
}

export interface DefaultCurrency {
    code: string;
}

export interface Identifier {
    value:     string;
    authority: string;
}

export interface ReferenceList {
    "@type": string;
    Flight:  FlightElement[];
}

export interface FlightElement {
    "@type":   FluffyType;
    id:        string;
    distance:  number;
    duration:  string;
    carrier:   Carrier;
    number:    string;
    equipment: string[];
    Departure: Arrival;
    Arrival:   Arrival;
}

export enum FluffyType {
    Flight = "Flight",
}

export interface Arrival {
    "@type":  ArrivalType;
    location: string;
    date:     Date;
    time:     string;
}

export enum ArrivalType {
    Arrival = "Arrival",
    Departure = "Departure",
}

export interface Result {
    "@type": string;
    Error:   Error[];
    Warning: Error[];
}

export interface Error {
    "@type":    string;
    StatusCode: number;
    Message:    string;
}

export default CatalogOfferingsResponse;