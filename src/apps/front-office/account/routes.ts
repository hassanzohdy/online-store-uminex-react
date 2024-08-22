import { guardedRoutes, reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AccountPage from "./pages/account/AccountPage";
import AddressPage from "./pages/addresses/AddressPage";

reverseGuardedRoutes([]);

guardedRoutes([
  {
    path: URLS.auth.root,
    component: AccountPage,
  },
  {
    path: URLS.auth.addresses,
    component: AddressPage,
  },
]);
