import { UseFormReturn } from "react-hook-form";

// types.ts file
export type FormType = UseFormReturn<{
  cardNumber: string;
  cardName: string;
  expirationDate: Date;
  cvv: string;
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  apartment?: string | undefined;
  shippingMethod: "economy" | "standard";
}>;

export type CountryType = {
  id: string;
  name: string;
};

export type StateType = {
  id: string;
  name: string;
  countryId: string;
};

export type CityType = {
  id: string;
  name: string;
  stateId: string;
};
