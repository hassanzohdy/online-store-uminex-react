import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import ProductsPage from "./pages/ProductsPage";

publicRoutes([
  {
    path: URLS.products.root,
    component: ProductsPage,
  },
]);
