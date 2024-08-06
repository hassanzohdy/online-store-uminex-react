import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import CollectionsPage from "./pages/CollectionsPage";

publicRoutes([
  {
    path: URLS.collections,
    component: CollectionsPage,
  },
]);
