import { getMe } from "apps/front-office/account/service/auth";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getMe();
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
