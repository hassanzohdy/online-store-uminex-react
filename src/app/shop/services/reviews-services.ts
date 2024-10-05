import endpoint from "shared/endpoint";

export function getReviews() {
  return endpoint.get("/products/");
}
