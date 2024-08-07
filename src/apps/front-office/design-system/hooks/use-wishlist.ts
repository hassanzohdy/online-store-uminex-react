import { useEffect, useState } from "react";
import { getWishlist } from "../services/wishlist-services";

export const useWishlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getWishlist();
        setData(data);
      } catch (errorL: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchCart();
  }, [error]);

  return { data, isLoading, error };
};
