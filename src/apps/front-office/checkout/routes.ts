import { checkoutRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import CheckoutPage from "./pages/CheckoutPage";

checkoutRoutes([
  {
    path: URLS.checkout,
    component: CheckoutPage,
  },
]);
