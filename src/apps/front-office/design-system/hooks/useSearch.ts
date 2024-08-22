import { ChangeEvent, useRef, useState } from "react";

type UseSearchResult = {
  value: string;
  category: string;
  categoryId: number | null;
  storeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCategory: (
    selectedCategory: string,
    selectedCategoryId: number,
  ) => void;
  OnClose: () => void;
};

export const useSearch = (): UseSearchResult => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const searchValueMap = useRef<Map<number | null, string>>(new Map());

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
    selectedCategoryId: number,
  ) => {
    if (selectedCategory === "all") {
      setCategoryId(null);
      return;
    }
    setCategory(selectedCategory);
    setCategoryId(selectedCategoryId || 0);
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
  };
};
