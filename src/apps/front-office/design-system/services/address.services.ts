import endpoint from "shared/endpoint";

type AddressDataType = {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
};
export function getAddress() {
  return endpoint.get("/addresses");
}

export function deleteAddress(addressId: number) {
  return endpoint.delete(`/addresses/${addressId}`);
}

export function updateAddress(addressId: number, data: AddressDataType) {
  return endpoint.put(`/addresses/${addressId}`, { ...data });
}

export function addAddress(data: AddressDataType) {
  return endpoint.post(`/addresses`, { ...data });
}
export function setPrimaryAddress(addressId: number) {
  return endpoint.patch(`/addresses/${addressId}/set-primary`);
}
