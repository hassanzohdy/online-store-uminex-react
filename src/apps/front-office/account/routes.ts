import { guardedRoutes, reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AccountPage from "./pages/AccountPage/AccountPage";
import AddressBookPage from "./pages/AddressBookPage";
import LoginPage from "./pages/LoginPage";

reverseGuardedRoutes([
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
]);

guardedRoutes([
  {
    path: URLS.auth.root,
    component: AccountPage,
  },
  {
    path: URLS.auth.addresses,
    component: AddressBookPage,
  },
]);
