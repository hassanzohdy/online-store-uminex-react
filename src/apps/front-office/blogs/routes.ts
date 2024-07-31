import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import BlogPage from "./pages/BlogPage";

publicRoutes([
  {
    path: URLS.blog.root,
    component: BlogPage,
  },
]);
