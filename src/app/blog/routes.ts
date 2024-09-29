import { publicRoutes } from "app/utils/router";
import URLS from "shared/utils/urls";
import BlogPage from "./pages/BlogPage";

publicRoutes([
  {
    path: URLS.blog.root,
    component: BlogPage,
  },
]);
