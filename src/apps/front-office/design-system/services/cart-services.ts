import endpoint from "shared/endpoint";

export function getCart() {
  return endpoint.get("/cart");
}

export function deleteItem(itemId: number) {
  return endpoint.delete(`/cart/${itemId}`);
}

export function updateItem(itemId: number, quantity: number) {
  return endpoint.put(`/cart/${itemId}`, { quantity });
}

export function addItem(product: number, quantity: number) {
  return endpoint.post(`/cart`, { product, quantity });
}
