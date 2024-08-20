import { RunTimeDriver } from "@mongez/cache";
import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { navigateTo } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import URLS from "apps/front-office/utils/urls";
import { AxiosResponse } from "axios";
import { apiBaseUrl, apiKey, apiOS } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl,
  cache: false,
  cacheOptions: {
    driver: new RunTimeDriver(),
    expiresAfter: 60 * 60 * 24 * 7, // 1 week, but because it is a runtime driver, it will be cleared when the page is refreshed
  },
  setAuthorizationHeader: () => {
    //${user.getAccessToken()}
    if (user.isLoggedIn()) {
      return `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM4MDM5MTMxLCJfaWQiOiI2NmE2MGIzZjY1ZmY5Y2U1MDQ4YWNhNTUiLCJ1c2VyVHlwZSI6InVzZXIiLCJjcmVhdGVkQXQiOjE3MjI1ODM5NjExMTYsImlhdCI6MTcyMjU4Mzk2MX0.3go9CPL-v2JQKz3dmrrg292Lp0CtSsgtsBGGfmsbnNg`;
    }

    if (!apiKey) return;

    return `key ${apiKey}`;
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["os"] = apiOS;
  headers["client-id"] = 127295270;
});

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data.data) {
    response.data = response.data.data;
  }

  if (response.data.user) {
    user.login(response.data.user);
  }
});

endpointEvents.onError(response => {
  if (response.data?.data) {
    response.data = response.data.data;
  }

  if (response.status === 401) {
    user.logout();
    navigateTo(URLS.auth.login);
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
