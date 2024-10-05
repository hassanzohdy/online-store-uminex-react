import endpoint from "shared/endpoint";

export function getProduct(id: string | number) {
  return endpoint.get("/products/" + id);
}
