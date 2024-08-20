import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getCompare } from "../services/compare-services";
import { Product } from "../utils/types";

type State = {
  isLoading: boolean;
  error: any | null;
  data: Product[] | null;
};

export const useCompare = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchCategory = async () => {
    try {
      const { data } = await getCompare();
      setState({
        data: data.products,
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
