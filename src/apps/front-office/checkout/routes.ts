import { checkoutRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import CheckoutPage from "./pages/CheckoutPage";

checkoutRoutes([
  {
    path: URLS.checkout,
    component: CheckoutPage,
  },
]);
