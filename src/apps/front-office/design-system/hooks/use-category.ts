import { useEffect, useState } from "react";
import { getCategories } from "../layouts/Header/services/header-services";

type Category = {
  id: string;
  label: string;
  value: string;
};

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return {
    categories,
  };
};
