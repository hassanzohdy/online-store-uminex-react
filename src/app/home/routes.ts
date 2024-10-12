import NotFoundPage from "app/404/pages/NotFoundPage/NotFoundPage";
import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import HomePage from "./pages/HomePage";

publicRoutes([
  {
    path: URLS.notFound,
    component: NotFoundPage,
  },
  {
    path: URLS.home,
    component: HomePage,
  },
]);
