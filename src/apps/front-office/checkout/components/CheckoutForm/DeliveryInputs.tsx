import { trans } from "@mongez/localization";
import { useEffect, useState } from "react";

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
import { countries } from "../../data";
import { useDeliveryData } from "../../hooks/useDeliveryData";
import { CheckoutFormType } from "../../utils/types";

interface DeliveryInputsProps {
  form: CheckoutFormType;
}

export default function DeliveryInputs({ form }: DeliveryInputsProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const { states, cities } = useDeliveryData(selectedCountry, selectedState);

  /* eslint-disable */
  useEffect(() => {
    const country = form.watch("country");
    setSelectedCountry(country);
  }, [form.watch("country")]);

  useEffect(() => {
    const state = form.watch("state");
    setSelectedState(state);
  }, [form.watch("state")]);
  /* eslint-enable */

  return (
    <div className="w-full space-y-8">
      <h1 className="text-2xl text-black mb-5">{trans("delivery")}</h1>
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={value => {
                field.onChange(value);
                setSelectedCountry(value);
              }}
              value={field.value}
              defaultValue={field.value}>
              <SelectTrigger className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
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
            <FormItem className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <Input
                  className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
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
            <FormItem className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <Input
                  className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
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
          <FormItem className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
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
          <FormItem className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
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
                onValueChange={value => {
                  field.onChange(value);
                  setSelectedState(value);
                }}
                value={field.value}
                defaultValue={field.value}
                disabled={states.length === 0}>
                <SelectTrigger className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
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
                <SelectTrigger className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
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
                  className="w-full h-14 md:h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
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
}
