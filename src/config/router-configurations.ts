import { RouterConfigurations, setApps } from "@mongez/react-router";
import frontOfficeApp from "app/app-modules.json";
import React from "react";
import { productionBasePath } from "shared/flags";
import { localeCodesList } from "shared/utils/localization";
import URLS from "shared/utils/urls";

setApps([frontOfficeApp]);

export const routerConfigurations: RouterConfigurations = {
  strictMode: true,
  basePath: productionBasePath,
  scrollToTop: "smooth",
  autoRedirectToLocaleCode: Object.keys(localeCodesList).length > 1,
  localization: {
    // hard reload is recommended if the application is large as it will make a full reload
    changeLanguageReloadMode: "hard",
    localeCodes: Object.keys(localeCodesList),
  },
  lazyLoading: {
    loaders: {
      app: () => {
        return import(`app/app-main`);
      },
      module: (_app: string, module: string) => {
        return import(`app/${module}/main.ts`);
      },
    },
  },
  notFound: {
    mode: "redirect",
    path: URLS.notFound,
  },
  rootComponent: React.lazy(() => import("layouts/Root")),
};
