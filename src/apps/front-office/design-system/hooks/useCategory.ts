import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";

import { getCategories } from "../services/category-services";
import { Category } from "../utils/types";

type State = {
  isLoading: boolean;
  error: any;
  data: Category[] | null;
};

export const useCategory = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchCategory = async () => {
    try {
      const { data } = await getCategories();
      setState({
        data: data.categories,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: null,
      });
    }
  };
  
  useOnce(() => {
    fetchCategory();
  });

  return state;
};
