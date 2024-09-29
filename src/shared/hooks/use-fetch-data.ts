import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";

type State = {
  isLoading: boolean;
  error: any | null;
  data: any | null;
};

type useFetchDataParams = () => Promise<any>;

export const useFetchData = (callbackFn: useFetchDataParams) => {
  const [state, setState] = useState<State>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchData = async () => {
    try {
      const { data } = await callbackFn();
      setState({
        data: data,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error,
      });
    }
  };
  useOnce(() => {
    fetchData();
  });

  return state;
};
