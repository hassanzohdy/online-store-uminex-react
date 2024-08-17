import { useEffect, useState } from "react";
import { getCategories } from "../services/category-services";

export const useCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getCategories();
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
