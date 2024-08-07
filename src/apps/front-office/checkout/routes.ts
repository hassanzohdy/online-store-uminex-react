import URLS from "apps/front-office/utils/urls";
import { checkoutRoutes, publicRoutes } from "apps/front-office/utils/router";
import CheckoutPage from "./pages/CheckoutPage";

checkoutRoutes([
  {
    path: URLS.checkout,
    component: CheckoutPage,
  },
]);
