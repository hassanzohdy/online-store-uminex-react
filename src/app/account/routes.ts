import ForgetPasswordPage from "app/account/pages/ForgetPassword";
import RegisterPage from "app/account/pages/RegisterPage";
import ResetPasswordPage from "app/account/pages/ResetPasswordPage";
import VerifyEmailPage from "app/account/pages/VerifyEmailPage";
import URLS from "../../shared/utils/urls";
import { guardedRoutes, reverseGuardedRoutes } from "../utils/router";
import AccountPage from "./pages/AccountPage/AccountPage";
import AddressBookPage from "./pages/AddressBookPage";
import LoginPage from "./pages/LoginPage";

reverseGuardedRoutes([
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
  {
    path: URLS.auth.register,
    component: RegisterPage,
  },
  {
    path: URLS.auth.verifyEmail,
    component: VerifyEmailPage,
  },
  {
    path: URLS.auth.forgetPassword,
    component: ForgetPasswordPage,
  },
  {
    path: URLS.auth.resetPassword,
    component: ResetPasswordPage,
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
