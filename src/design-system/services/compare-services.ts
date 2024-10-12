import endpoint from "shared/endpoint";

export function getCompare() {
  return endpoint.get("/compare");
}

export function deleteItem(id: number) {
  return endpoint.delete(`/compare/${id}`);
}

export function addItem(productId: number) {
  return endpoint.post(`/compare/${productId}`);
}
