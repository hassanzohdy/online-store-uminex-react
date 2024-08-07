import endpoint from "shared/endpoint";

export function getCategories() {
  return endpoint.get("/categories?hasActiveProducts=false");
}
