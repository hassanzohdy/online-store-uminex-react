import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import CollectionsPage from "./pages/CollectionsPage";

publicRoutes([
  {
    path: URLS.collections,
    component: CollectionsPage,
  },
]);
