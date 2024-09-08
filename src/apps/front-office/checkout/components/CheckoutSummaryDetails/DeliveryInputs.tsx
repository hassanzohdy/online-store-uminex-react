import { trans } from "@mongez/localization";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "design-system/components/ui/select";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface DeliveryInputsProps {
  form: UseFormReturn<{
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
}

const countries = [
  { id: "US", name: "United States" },
  { id: "EG", name: "Egypt" },
];

const statesData: IState[] = [
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

const citiesData: ICity[] = [
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

interface IState {
  id: string;
  name: string;
  countryId: string;
}

interface ICity {
  id: string;
  name: string;
  stateId: string;
}

const DeliveryInputs = ({ form }: DeliveryInputsProps) => {
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    const selectedCountry = form.watch("country");

    if (selectedCountry) {
      const countryStates = statesData.filter(
        state => state.countryId === selectedCountry,
      );
      setStates(countryStates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, form.watch("country")]);

  useEffect(() => {
    const selectedState = form.watch("state");

    if (selectedState) {
      const stateCities = citiesData.filter(
        city => city.stateId === selectedState,
      );
      setCities(stateCities);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, form.watch("state")]);

  return (
    <div className="w-full space-y-8">
      <h1 className="text-2xl text-black mb-5">{trans("delivery")}</h1>
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}>
              <SelectTrigger className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
                <SelectValue placeholder={trans("SelectCountry")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{trans("SelectCountry")}</SelectLabel>
                  {countries.map(country => (
                    <SelectItem key={country.id} value={country.id}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex items-center gap-3 w-full flex-wrap lg:flex-nowrap">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <Input
                  className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                  placeholder={trans("firstName")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <Input
                  className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                  placeholder={trans("lastName")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                placeholder={trans("Address")}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="apartment"
        render={({ field }) => (
          <FormItem className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                placeholder={trans("Apartment")}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex items-center gap-3 w-full flex-wrap lg:flex-nowrap">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                disabled={states.length === 0}>
                <SelectTrigger className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
                  <SelectValue placeholder={trans("SelectState")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{trans("SelectState")}</SelectLabel>
                    {states.map(state => (
                      <SelectItem key={state.id} value={state.id}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                disabled={cities.length === 0}>
                <SelectTrigger className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
                  <SelectValue placeholder={trans("SelectCity")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{trans("SelectCity")}</SelectLabel>
                    {cities.map(city => (
                      <SelectItem key={city.id} value={city.id}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={trans("zipCode")}
                  className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default DeliveryInputs;
