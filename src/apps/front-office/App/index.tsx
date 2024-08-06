import { useOnce } from "@mongez/react-hooks";
import { getGuestToken } from "apps/front-office/account/service/auth";
import user from "apps/front-office/account/user";
import React, { useState } from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  const [canPass, setCanPass] = useState(user.isLoggedIn());

  useOnce(() => {
    if (user.isLoggedIn()) return;

    getGuestToken()
      .then(response => {
        user.login(response.data.user);
        setCanPass(true);
      })
      .catch(error => console.log(error));
  });

  if (!canPass) return;

  return <>{children}</>;
}
