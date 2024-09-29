import endpoint from "shared/endpoint";

/**
 * Get Products list
 */
export function getProductsList(params: any = {}) {
  return endpoint.get("/products", {
    params,
  });
}

/**
 * Get products details
 */
export function getProduct(id: string | number) {
  return endpoint.get("/products/" + id);
}
