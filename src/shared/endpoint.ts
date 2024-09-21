import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { navigateTo } from "@mongez/react-router";
import { AxiosResponse } from "axios";

import user from "app/account/user";
import URLS from "app/utils/urls";
import { apiBaseUrl, endpointClientId } from "./flags";

import { apiOS } from "./flags";

const endpoint = new Endpoint({
  baseURL: apiBaseUrl,
  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM4MDM5MTMxLCJfaWQiOiI2NmE2MGIzZjY1ZmY5Y2U1MDQ4YWNhNTUiLCJ1c2VyVHlwZSI6InVzZXIiLCJjcmVhdGVkQXQiOjE3MjU4ODE4MjMzMDgsImlhdCI6MTcyNTg4MTgyM30.Mjt3LHCB4pWB-6HGFw6jlulVCLrJXROHkb40SFPVBMM`;
    }
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["os"] = apiOS;
  headers["client-id"] = endpointClientId;
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
