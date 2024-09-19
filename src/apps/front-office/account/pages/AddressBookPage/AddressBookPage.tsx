import Helmet from "@mongez/react-helmet";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import { useState } from "react";
import AddAddressForm from "../../components/address/AddAddressForm";
import AddressesDetails from "../../components/address/AddressesDetails";

export default function AddressBookPage() {
  const [_, setTicks] = useState(0);

  const updateData = () => {
    setTicks(prev => prev + 1);
  };

  return (
    <div className="px-4 bg-slate-100">
      <Helmet title="Address Book Page" />
      <div className="w-full max-w-[1450px] mx-auto px-4 my-5 py-8 md:my-8">
        <Breadcrumbs title="Addresses" />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 my-5">
          <AddAddressForm updateData={updateData} />
          <AddressesDetails />
        </div>
      </div>
    </div>
  );
}
