import { checkoutRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import CheckoutPage from "./pages/CheckoutPage";

checkoutRoutes([
  {
    path: URLS.checkout,
    component: CheckoutPage,
  },
]);
