import endpoint from "shared/endpoint";

export function getWishlist() {
  return endpoint.get("/wishlist");
}

export function deleteItem(id: number) {
  return endpoint.delete(`/wishlist/${id}`);
}

export function updateItem(id: number, quantity: number) {
  return endpoint.put(`/wishlist/${id}`, { quantity });
}

export function addItem(productId: number, quantity: number) {
  return endpoint.post(`/wishlist`, { productId, quantity });
}
