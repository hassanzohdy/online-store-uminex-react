import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";

import { getMe } from "apps/front-office/account/services/auth";
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

  const fetchCategory = async () => {
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

    fetchCategory();
  });

  return state;
};
