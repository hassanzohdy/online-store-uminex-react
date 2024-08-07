import { useEffect, useState } from "react";
import { getCart } from "../services/cart-services";
import { getMe } from "apps/front-office/account/service/auth";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  useEffect(()=>{
    const fetchCart = async() =>{
        setIsLoading(true);
        setError(null);
        try {
          const {data} = await getMe();
          setData(data);
        } catch (errorL:any) {
          setError(error);
        }
        setIsLoading(false);
    }
    fetchCart()
  },[])

  return { data, isLoading, error };
};
