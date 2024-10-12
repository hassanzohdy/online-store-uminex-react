import endpoint from "shared/endpoint";

export function getWishlist() {
  return endpoint.get("/wishlist");
}

export function deleteItem(id: number) {
  return endpoint.delete(`/wishlist/${id}`);
}

export function addItem(productId: number) {
  return endpoint.post(`/wishlist/${productId}`);
}
