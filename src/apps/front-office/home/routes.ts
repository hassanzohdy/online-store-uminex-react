import { publicRoutes } from "@/apps/front-office/utils/router";
import URLS from "@/apps/front-office/utils/urls";
import HomePage from "./pages/HomePage";
import NotFoundPage from "../design-system/layouts/NotFoundPage";

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
