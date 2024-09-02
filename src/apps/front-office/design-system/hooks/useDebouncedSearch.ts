import { queryString } from "@mongez/react-router";
import { useEffect, useState } from "react";

import { useProduct } from "apps/front-office/design-system/hooks/useProducts";

type UseDebouncedSearchProps = {
  value?: string;
  category?: number | null;
};

type UseDebouncedSearchResult = {
  data: any;
  isLoading: boolean;
  params: string;
};

export const useDebouncedSearch = ({
  value,
  category,
}: UseDebouncedSearchProps): UseDebouncedSearchResult => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (value?.trim()) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedValue("");
    }
  }, [value]);

  const params = queryString.toQueryString({ q: debouncedValue, category });
  const { data, isLoading } = useProduct(params);

  return {
    data,
    isLoading,
    params,
  };
};
