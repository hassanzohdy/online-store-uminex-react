import { CityType, CountryType, StateType } from "../utils/types";

export const countries: CountryType[] = [
  { id: "US", name: "United States" },
  { id: "EG", name: "Egypt" },
];

export const statesData: StateType[] = [
  { id: "CA", name: "California", countryId: "US" },
  { id: "NY", name: "New York", countryId: "US" },
  { id: "TX", name: "Texas", countryId: "US" },
  { id: "FL", name: "Florida", countryId: "US" },
  { id: "IL", name: "Illinois", countryId: "US" },
  { id: "Cairo", name: "Cairo", countryId: "EG" },
  { id: "Alex", name: "Alexandria", countryId: "EG" },
  { id: "Giza", name: "Giza", countryId: "EG" },
  { id: "Luxor", name: "Luxor", countryId: "EG" },
];

export const citiesData: CityType[] = [
  { id: "LosAngeles", name: "Los Angeles", stateId: "CA" },
  { id: "SanFrancisco", name: "San Francisco", stateId: "CA" },
  { id: "SanDiego", name: "San Diego", stateId: "CA" },
  { id: "NYC", name: "New York City", stateId: "NY" },
  { id: "Buffalo", name: "Buffalo", stateId: "NY" },
  { id: "Houston", name: "Houston", stateId: "TX" },
  { id: "Dallas", name: "Dallas", stateId: "TX" },
  { id: "Miami", name: "Miami", stateId: "FL" },
  { id: "Orlando", name: "Orlando", stateId: "FL" },
  { id: "Chicago", name: "Chicago", stateId: "IL" },
  { id: "Springfield", name: "Springfield", stateId: "IL" },
  { id: "GizaCity", name: "Giza", stateId: "Giza" },
  { id: "NasrCity", name: "Nasr City", stateId: "Cairo" },
  { id: "Heliopolis", name: "Heliopolis", stateId: "Cairo" },
  { id: "AlexandriaCity", name: "Alexandria", stateId: "Alex" },
  { id: "Aswan", name: "Aswan", stateId: "Luxor" },
  { id: "Hurghada", name: "Hurghada", stateId: "Luxor" },
];
