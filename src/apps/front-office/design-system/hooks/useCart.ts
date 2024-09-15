import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";

import { getCart } from "../services/cart-services";
import { CartType } from "../utils/types";

type State = {
  isLoading: boolean;
  error: any | null;
  data: CartType | null;
};
export const useCart = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchCart = async () => {
    try {
      const { data } = await getCart();
      setState({
        data: data.cart,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error,
      });
    }
  };

  useOnce(() => {
    fetchCart();
  });

  return state;
};
