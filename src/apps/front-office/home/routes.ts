import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import NotFoundPage from "design-system/layouts/NotFoundPage";
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
