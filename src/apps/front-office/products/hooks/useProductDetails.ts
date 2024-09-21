import { Product } from "design-system/utils/types";
import { useEffect, useState } from "react";
import { getProduct } from "../services/products-service";

type StateType = {
  isLoading: boolean;
  error: any;
  data: Product | null;
};

export const useProductsDetails = (id: string) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    error: null,
    data: null,
  });

  const getProductDetails = async (id: string) => {
    try {
      const { data } = await getProduct(id);
      setState({
        isLoading: false,
        error: null,
        data: data.product,
      });
    } catch (error) {
      setState({
        isLoading: false,
        error,
        data: null,
      });
    }
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return state;
};
