
import { publicRoutes } from "app/utils/router";
import ContactUsPage from "./pages/ContactUsPage";
import URLS from "app/utils/urls";

publicRoutes([
  {
    path: URLS.contactUs,
    component: ContactUsPage,
  },
]);
