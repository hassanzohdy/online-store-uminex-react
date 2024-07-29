import endpoint from "shared/endpoint";

export function getHome() {
  return endpoint.get("/home");
}
