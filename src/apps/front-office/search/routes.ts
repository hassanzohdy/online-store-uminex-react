
import { publicRoutes } from "app/utils/router";
import SearchPage from "./pages/SearchPage";
import URLS from "app/utils/urls";

publicRoutes([
  {
    path: URLS.searchRoute.root,
    component: SearchPage,
  },
]);
