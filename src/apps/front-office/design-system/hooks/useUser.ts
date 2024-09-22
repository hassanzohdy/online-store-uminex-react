import { useOnce } from "@mongez/react-hooks";
import { getMe } from "app/account/services/auth";
import { useState } from "react";
import user from "../../account/user";
import { User } from "../utils/types";

type State = {
  data: User | null;
  isLoading: boolean;
  error: any;
};

export const useUser = () => {
  const [state, setState] = useState<State>({
    isLoading: user.isNotLoggedIn(),
    error: null,
    data: user.all() as User | null,
  });

  const fetchUser = async () => {
    try {
      const { data } = await getMe();
      setState({
        data: data.user,
        isLoading: user.isNotLoggedIn(),
        error: null,
      });

      user.login(data.user);
    } catch (error: any) {
      setState({
        error,
        data: null,
        isLoading: false,
      });
    }
  };

  useOnce(() => {
    if (user.isLoggedIn()) return;

    fetchUser();
  });

  return state;
};
