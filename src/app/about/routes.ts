import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import AboutPage from "./pages/AboutPage";

publicRoutes([
  {
    path: URLS.about,
    component: AboutPage,
  },
]);
