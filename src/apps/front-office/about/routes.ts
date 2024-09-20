
import { publicRoutes } from "app/utils/router";
import AboutPage from "./pages/AboutPage";
import URLS from "app/utils/urls";

publicRoutes([
  {
    path: URLS.about,
    component: AboutPage,
  },
]);
