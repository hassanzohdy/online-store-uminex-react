import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";

publicRoutes([
  {
    path: URLS.products.root,
    component: ProductsPage,
  },
  {
    path: URLS.products.viewProduct,
    component: ProductDetailsPage,
  },
]);
