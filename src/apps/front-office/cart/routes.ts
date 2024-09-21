import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import CartPage from "./pages/CartPage/CartPage";

publicRoutes([
  {
    path: URLS.cart,
    component: CartPage,
  },
]);
