import endpoint from "shared/endpoint";

export function getProducts(query: string) {
  return endpoint.get(`/products?`+query);
}