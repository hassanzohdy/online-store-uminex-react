import { useOnce } from "@mongez/react-hooks";
import { getGuestToken } from "app/account/services/auth";
import user from "app/account/user";
import NextTopLoader from "nextjs-toploader";
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

  return (
    <>
      <NextTopLoader color="white" />
      {children}
    </>
  );
}
