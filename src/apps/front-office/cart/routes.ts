import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import CartPage from "./pages/CartPage";

publicRoutes([
  {
    path: URLS.cart,
    component: CartPage,
  },
]);
