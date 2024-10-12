import { useOnce } from "@mongez/react-hooks";
import { getGuestToken } from "app/account/services/auth";
import user from "app/account/user";
import ModalProvider from "design-system/providers/model-provider";
import NextTopLoader from "nextjs-toploader";
import React, { useState } from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function Root({ children }: AppProps) {
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
      <ModalProvider />
      <NextTopLoader color="white" />
      {children}
    </>
  );
}
