import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import NotFoundPage from "design-system/layouts/NotFoundPage";
import CartPage from "../design-system/components/cart/pages/CartPage";
import HomePage from "./pages/HomePage";

publicRoutes([
  {
    path: URLS.notFound,
    component: NotFoundPage,
  },
  {
    path: URLS.home,
    component: HomePage,
  },
  {
    path: URLS.cart,
    component: CartPage,
  },
]);
