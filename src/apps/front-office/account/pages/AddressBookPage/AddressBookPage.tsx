import { useState } from "react";
import AddAddressForm from "../../components/address/AddAddressForm";
import AddressesDetails from "../../components/address/AddressesDetails";

export default function AddressBookPage() {
  const [_, setTicks] = useState(0);

  const updateData = () => {
    setTicks(prev => prev + 1);
  };

  return (
    <div className="px-4">
      <div className="w-full max-w-[1450px] mx-auto px-4 py-8 my-4 md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <AddAddressForm updateData={updateData} />
          <AddressesDetails />
        </div>
      </div>
    </div>
  );
}
