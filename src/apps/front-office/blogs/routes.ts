import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import BlogsPage from "./pages/BlogsPage";

publicRoutes([
  {
    path: URLS.blogs.root,
    component: BlogsPage,
  },
]);
