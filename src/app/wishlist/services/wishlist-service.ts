import endpoint from "shared/endpoint";

/**
 * Get Wishlists list
 */
export function getWishlistsList(params: any = {}) {
  return endpoint.get("/wishlist", {
    params,
  });
}

/**
 * Get wishlist details
 */
export function getWishlist(id: string | number) {
  return endpoint.get("/wishlist/" + id);
}
