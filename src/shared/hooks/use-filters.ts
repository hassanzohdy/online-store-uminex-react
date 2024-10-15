import { queryString } from "@mongez/react-router";
import { debounce } from "@mongez/reinforcements";
import { useCallback, useEffect, useState } from "react";

export interface Filters {
  sort: string;
  page: number;
  category: number | null;
  minPrice: number | null;
  maxPrice: number | null;
  inStock: boolean | null;
  q: string | null;
}

const initialFilters: Filters = {
  sort: "none",
  page: 1,
  category: null,
  minPrice: null,
  maxPrice: null,
  inStock: null,
  q: null,
};

export function useFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [params, setParams] = useState<string>("");

  const cleanFilters = (filters: Omit<Filters, "sort">) => {
    const { ...restFilters } = filters;
    return Object.fromEntries(
      Object.entries(restFilters).filter(
        ([_, value]) => value !== null && value !== undefined && value !== "",
      ),
    );
  };

  const updateURLParams = useCallback((newFilters: Omit<Filters, "sort">) => {
    const cleanedFilters = cleanFilters(newFilters);
    const queryParams = queryString.toQueryString(cleanedFilters);
    setParams(queryParams);
    queryString.update(cleanedFilters);
  }, []);

  const updatePageNumber = (newNumber: number) => {
    const updatedFilters = { ...filters, page: newNumber };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const updateCategory = (newCategory: number | null) => {
    if (newCategory === filters.category) {
      const updatedFilters = { ...filters, category: null };
      setFilters(updatedFilters);
      updateURLParams(updatedFilters);
      return;
    }
    const updatedFilters = { ...filters, category: newCategory };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const updateInStock = (newInStock: boolean | null) => {
    if (newInStock === filters.inStock) {
      const updatedFilters = { ...filters, inStock: null };
      setFilters(updatedFilters);
      updateURLParams(updatedFilters);
      return;
    }
    const updatedFilters = { ...filters, inStock: true };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const updateMinPrice = debounce((newMinPrice: number | null) => {
    if (newMinPrice === 0) {
      const updatedFilters = { ...filters, minPrice: null };
      setFilters(updatedFilters);
      updateURLParams(updatedFilters);
      return;
    }
    const updatedFilters = { ...filters, minPrice: newMinPrice };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  }, 500);

  const updateMaxPrice = debounce((newMaxPrice: number | null) => {
    if (newMaxPrice === 0) {
      const updatedFilters = { ...filters, maxPrice: null };
      setFilters(updatedFilters);
      updateURLParams(updatedFilters);
      return;
    }
    const updatedFilters = { ...filters, maxPrice: newMaxPrice };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  }, 500);

  const updateQuery = (newQuery: string | null) => {
    const updatedFilters = { ...filters, q: newQuery };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const updateSortOptions = (sort: string) => {
    const updatedFilters = { ...filters, sort };
    setFilters(updatedFilters);
  };

  const resetFiltersExceptQuery = () => {
    const updatedFilters: Omit<Filters, "sort"> = {
      ...initialFilters,
      q: filters.q,
    };

    setFilters({
      ...initialFilters,
      q: filters.q,
      sort: filters.sort,
    });
    updateURLParams(updatedFilters);
  };

  useEffect(() => {
    const category = queryString.get("category") || null;
    const page = queryString.get("page") || 1;
    const minPrice = queryString.get("minPrice") || null;
    const maxPrice = queryString.get("maxPrice") || null;
    const q = queryString.get("q") || null;
    const inStock = queryString.get("inStock") || null;

    const initialURLFilters: Omit<Filters, "sort"> = {
      category: category ? Number(category) : null,
      page: Number(page),
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      q,
      inStock,
    };

    setFilters(currentFilters => ({
      ...currentFilters,
      ...initialURLFilters,
    }));

    updateURLParams(initialURLFilters);
  }, [updateURLParams]);

  return {
    filters,
    params,
    updatePageNumber,
    updateCategory,
    updateMinPrice,
    updateMaxPrice,
    updateQuery,
    updateSortOptions,
    updateInStock,
    resetFiltersExceptQuery,
  };
}
