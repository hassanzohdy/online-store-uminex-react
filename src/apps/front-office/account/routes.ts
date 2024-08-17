import { guardedRoutes, reverseGuardedRoutes } from "../utils/router";
import AccountPage from "./pages/AccountPage";

reverseGuardedRoutes([]);

guardedRoutes([
  {
    path: "/account",
    component: AccountPage,
  },
]);
