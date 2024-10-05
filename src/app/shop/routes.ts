import CategoryPage from "app/shop/pages/CollectionsPage";
import ProductDetailsPage from "app/shop/pages/ProductDetailsPage";
import ProductsPage from "app/shop/pages/ProductsPage";
import SearchPage from "app/shop/pages/SearchPage";
import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";

publicRoutes([
  {
    path: URLS.shop.products,
    component: ProductsPage,
  },
  {
    path: URLS.shop.product,
    component: ProductDetailsPage,
  },
  {
    path: URLS.shop.search,
    component: SearchPage,
  },
  {
    path: URLS.shop.collections,
    component: CategoryPage,
  },
]);
