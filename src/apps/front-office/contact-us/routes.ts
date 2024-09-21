import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import ContactUsPage from "./pages/ContactUsPage";

publicRoutes([
  {
    path: URLS.contactUs,
    component: ContactUsPage,
  },
]);
