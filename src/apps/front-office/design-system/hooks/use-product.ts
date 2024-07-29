import { useEffect, useState } from "react";
import { getProducts } from "../layouts/Header/services/header-services";

type Product = {
  name: string;
  category: string;
};

export const useProducts = (value: string) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { products } = await getProducts(value);
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, [value]);

  return {
    products,
    loading,
  };
};
