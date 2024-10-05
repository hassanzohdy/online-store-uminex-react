import NotFoundPage from "app/404/pages/NotFoundPage/NotFoundPage";
import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";

publicRoutes([
  {
    path: URLS.notFound,
    component: NotFoundPage,
  },
]);
