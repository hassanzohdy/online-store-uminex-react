import { useEffect, useState } from "react";
import { getProducts } from "../services/product-services";
import { ProductsResponse } from "../utils/types";

type State = {
  isLoading: boolean;
  error: null | any;
  data: ProductsResponse | null;
};

export const useProduct = (params: string) => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts(params);
        setState({
          data: data,
          isLoading: false,
          error: null,
        });
      } catch (error: any) {
        setState({
          data: null,
          isLoading: false,
          error: error.message,
        });
      }
    };

    fetchProducts();
  }, [params]);

  return state;
};
