import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import ShopPage from "./pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop,
    component: ShopPage,
  },
]);
