import { getProduct } from "app/shop/services/product-services";
import { useEffect, useState } from "react";
import { Product } from "shared/utils/types";

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
