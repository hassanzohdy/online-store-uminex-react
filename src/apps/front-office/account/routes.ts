import { guardedRoutes, reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AccountPage from "./pages/AccountPage/AccountPage";
import AddressBookPage from "./pages/AddressBookPage";

reverseGuardedRoutes([]);

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
