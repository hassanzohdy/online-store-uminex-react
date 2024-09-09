import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import CollectionsPage from "./pages/CollectionsPage";

publicRoutes([
  {
    path: URLS.collections,
    component: CollectionsPage,
  },
]);
