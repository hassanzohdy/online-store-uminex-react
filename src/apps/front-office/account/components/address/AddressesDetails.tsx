import { addressesAtom } from "app/account/atoms/address-atom";
import { useState } from "react";
import AddressDetailsCard from "./AddressDetailsCard";

export default function AddressesDetails() {
  const [_, setTicks] = useState(0);
  const addresses = addressesAtom.useValue();

  const updateData = () => {
    setTicks(prev => prev + 1);
  };

  if (addresses.length === 0) {
    return null;
  }

  return (
    <div className="flex items-start flex-col gap-10 p-5 bg-white rounded-lg">
      {addresses.map(address => (
        <AddressDetailsCard
          key={address.id}
          address={address}
          updateData={updateData}
        />
      ))}
    </div>
  );
}
