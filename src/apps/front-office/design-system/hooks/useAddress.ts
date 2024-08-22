import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getAddress } from "../services/address.services";
import { Address } from "../utils/types";

type State = {
  data: Address[] | null;
  isLoading: boolean;
  error: any | null;
};

export const useAddresses = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchAddress = async () => {
    try {
      const { data } = await getAddress();
      setState({
        data: data.addresses,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setState({
        error,
        data: null,
        isLoading: false,
      });
    }
  };
  useOnce(() => {
    fetchAddress();
  });

  return state;
};
