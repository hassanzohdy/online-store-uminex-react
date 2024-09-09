import { RouterConfigurations } from "@mongez/react-router";
import { localeCodesList } from "app/utils/localization";
import URLS from "app/utils/urls";
import React from "react";
import { productionBasePath } from "./flags";

export const routerConfigurations: RouterConfigurations = {
  strictMode: false,
  basePath: productionBasePath,
  scrollToTop: "smooth",
  autoRedirectToLocaleCode: Object.keys(localeCodesList).length > 1,
  appendLocaleCodeToUrl: true,
  localization: {
    // hard reload is recommended if the application is large as it will make a full reload
    changeLanguageReloadMode: "soft",
    localeCodes: Object.keys(localeCodesList),
  },
  lazyLoading: {
    loadingComponent: React.lazy(
      () => import("design-system/Indicators/ProgressBar"),
    ),
    loaders: {
      app: (app: string) => {
        return import(`./../apps/${app}/${app}-provider.ts`);
      },
      module: (app: string, module: string) => {
        return import(`./../apps/${app}/${module}/provider.ts`);
      },
    },
  },
  notFound: {
    mode: "redirect",
    path: URLS.notFound,
  },

  rootComponent: React.lazy(() => import("app/App")),
};
