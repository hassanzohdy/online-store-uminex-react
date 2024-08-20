import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getWishlist } from "../services/wishlist-services";
import { Wishlist } from "../utils/types";

type State = {
  isLoading: boolean;
  error: any | null;
  data: Wishlist | null;
};

export const useWishlist = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchWishlist = async () => {
    try {
      const { data } = await getWishlist();
      setState({
        data: data,
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
    fetchWishlist();
  });

  return state;
};
