import { useEffect, useState } from "react";
import { getProducts } from "../../design-system/services/product-services";
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
    if (!params || params === "" || params === "q=&") return;

    const fetchProducts = async () => {
      try {
        setState({
          ...state,
          isLoading: true,
        });
        const { data } = await getProducts(params);
        setState({
          data,
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
    // eslint-disable-next-line
  }, [params]);

  return state;
};
