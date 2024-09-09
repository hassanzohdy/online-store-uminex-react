import endpoint from "shared/endpoint";

export function subscribeToNewsletter(email: string) {
  return endpoint.post("/newsletter", { email });
}
