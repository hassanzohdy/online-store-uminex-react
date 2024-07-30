import endpoint from "shared/endpoint";

/**
 * Get Carts list
 */
export function getCartsList(params: any = {}) {
  return endpoint.get("/cart", {
    params,
  });
}

/**
 * Get cart details
 */
export function getCart(id: string | number) {
  return endpoint.get("/cart/" + id);
}
