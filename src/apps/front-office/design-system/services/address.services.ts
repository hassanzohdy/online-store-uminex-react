import endpoint from "shared/endpoint";

export function getAddress() {
  return endpoint.get("/addresses");
}

export function deleteAddress(addressId: number) {
  return endpoint.delete(`/addresses/${addressId}`);
}

export function updateAddress(addressId: number, data: any) {
  return endpoint.put(`/addresses/${addressId}`, { data });
}

export function addAddress(data: any) {
  return endpoint.post(`/cart`, { data });
}
export function setPrimaryAddress(addressId:number) {
  return endpoint.patch(`/addresses/${addressId}/set-primary`)
}
