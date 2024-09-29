import { navigateTo } from "@mongez/react-router";
import user from "app/account/user";
import URLS from "shared/utils/urls";

/**
 * Use this middleware if the page requires the user to be logged in
 */
export function Guardian() {
  if (!user.hasAccessToken || user.isGuest()) {
    return navigateTo(URLS.auth.login);
  }
}

/**
 * Use this middleware if you want to redirect the user to the home page if he/she is logged in
 */
export function ReverseGuardian() {
  if (user.hasAccessToken && !user.isGuest()) {
    return navigateTo(URLS.home);
  }
}
