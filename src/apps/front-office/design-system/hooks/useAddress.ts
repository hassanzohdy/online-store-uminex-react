import { useEffect, useState } from "react";
import { getAddress } from "../services/address.services";

export const useAddresses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getAddress();
        setData(data);
      } catch (errorL: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchCategory();
  }, [error]);

  return { data, isLoading, error };
};
