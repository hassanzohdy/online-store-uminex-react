import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import {
  addAddress,
  deleteAddress,
  setPrimaryAddress,
  updateAddress,
} from "design-system/services/address.services";
import { Address } from "design-system/utils/types";

export const addressesAtom = atom<Address[]>({
  key: "addresses",
  default: cache.get("addresses", []),
  beforeUpdate(addresses) {
    cache.set("addresses", addresses);
    return addresses;
  },
  actions: {
    addAddress: async (data: Address) => {
      const addresses = addressesAtom.value;
      const response = await addAddress(data);
      addresses.push(response.data.address);
      addressesAtom.update(addresses);
      cache.set("addresses", addresses);
      return response.data.address.id;
    },
    setPrimaryAddress: async (addressId: number) => {
      await setPrimaryAddress(addressId);
      const addresses = addressesAtom.value;
      const primaryAddress = addresses.find(
        address => address.id === addressId,
      );
      if (primaryAddress) {
        primaryAddress.isPrimary = true;
        addresses.forEach(address => {
          if (address.id !== addressId) {
            address.isPrimary = false;
          }
        });
        addressesAtom.update(addresses);
        cache.set("addresses", addresses);
      }
    },
    deleteAddress: async (addressId: number) => {
      await deleteAddress(addressId);
      const addresses = addressesAtom.value;
      const index = addresses.findIndex(address => address.id === addressId);
      if (index > -1) {
        addresses.splice(index, 1);
        addressesAtom.update(addresses);
        cache.set("addresses", addresses);
      }
    },
    updateAddress: async (addressId: number, addressData: Address) => {
      await updateAddress(addressId, addressData);
      const addresses = addressesAtom.value;
      const index = addresses.findIndex(address => address.id === addressId);
      if (index > -1) {
        addresses[index] = { ...addresses[index], ...addressData };
        addressesAtom.update(addresses);
        cache.set("addresses", addresses);
      }
    },
  },
});
