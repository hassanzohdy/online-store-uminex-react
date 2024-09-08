import { debounce } from "@mongez/reinforcements";
import { useEffect, useState } from "react";

import { citiesData, statesData } from "../data";
import { CityType, StateType } from "../utils/types";

export function useDeliveryData(
  selectedCountry: string,
  selectedState: string,
) {
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);

  useEffect(() => {
    const fetchStates = debounce(() => {
      const countryStates = statesData.filter(
        state => state.countryId === selectedCountry,
      );
      setStates(countryStates);
    }, 300);

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = debounce(() => {
      const stateCities = citiesData.filter(
        city => city.stateId === selectedState,
      );
      setCities(stateCities);
    }, 300);

    fetchCities();
  }, [selectedState]);

  return { states, cities };
}
