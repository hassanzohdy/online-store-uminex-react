import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import WishlistPage from "./pages/WishlistPage";

publicRoutes([
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
]);
