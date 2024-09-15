
import { publicRoutes } from "app/utils/router";
import ProductsPage from "./pages/ProductsPage";
import URLS from "app/utils/urls";

publicRoutes([
  {
    path: URLS.products.root,
    component: ProductsPage,
  },
]);
