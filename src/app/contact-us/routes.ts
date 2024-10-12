import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import ContactUsPage from "./pages/ContactUsPage";

publicRoutes([
  {
    path: URLS.contactUs,
    component: ContactUsPage,
  },
]);
