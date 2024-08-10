import { useEffect, useState } from "react";
import { getProducts } from "../services/product-services";



export const useProduct = (params: string ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await getProducts(params);
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

      fetchProducts();
  }, [params]);

  return { data, isLoading, error };
};
