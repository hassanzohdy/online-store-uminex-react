import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import SearchPage from "./pages/SearchPage";

publicRoutes([
  {
    path: URLS.searchRoute.root,
    component: SearchPage,
  },
]);
