import { navigateTo, queryString } from "@mongez/react-router";
import { ChangeEvent, useRef, useState } from "react";
import URLS from "shared/utils/urls";

type UseSearchResult = {
  value: string;
  category: string;
  categoryId: number | null;
  storeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCategory: (
    selectedCategory: string,
    selectedCategoryId: number | null,
  ) => void;
  OnClose: () => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    handleClose?: () => void,
  ) => void;
  handleSearch: () => void;
};

export const useSearch = (): UseSearchResult => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const searchValueMap = useRef<Map<number | null, string>>(new Map());
  const params = queryString.toQueryString({ q: value, category: categoryId });

  const storeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (searchValueMap.current.get(categoryId) === inputValue) {
      return;
    }

    setValue(inputValue);

    if (category && !inputValue.includes(category)) {
      setCategory("");
    }

    if (inputValue.trim()) {
      searchValueMap.current.set(categoryId, inputValue);
    }
  };

  const selectCategory = (
    selectedCategory: string,
    selectedCategoryId: number | null,
  ) => {
    if (selectedCategory === "all") {
      setCategoryId(null);
      return;
    }
    setCategory(selectedCategory);
    setCategoryId(selectedCategoryId || null);
  };

  const handleSearch = () => {
    if (value.trim() === "" && !categoryId) return;
    OnClose();
    navigateTo(URLS.searchRoute.search("product", params));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    handleClose?: () => void,
  ) => {
    if (value.trim() === "" && !categoryId) return;
    if (e.key === "Enter") {
      OnClose();
      handleSearch();
      if (handleClose) {
        handleClose();
      }
    }
  };

  const OnClose = () => {
    setValue("");
    setCategory("");
    setCategoryId(null);
  };

  return {
    value,
    category,
    categoryId,
    storeInputValue,
    selectCategory,
    OnClose,
    handleKeyDown,
    handleSearch,
  };
};
