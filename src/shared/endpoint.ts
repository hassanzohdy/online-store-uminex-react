import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { navigateTo } from "@mongez/react-router";
import user from "app/account/user";
import URLS from "app/utils/urls";
import { AxiosResponse } from "axios";
import { apiBaseUrl } from "./flags";

import { apiOS } from "./flags";

const endpoint = new Endpoint({
  baseURL: apiBaseUrl,
  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["os"] = apiOS;
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
