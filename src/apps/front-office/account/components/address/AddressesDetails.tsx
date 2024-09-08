import { useAddresses } from "design-system/hooks/useAddress";
import { LuLoader2 } from "react-icons/lu";
import AddressDetails from "./AddressDetails";

const AddressesDetails = () => {
  const { data: addresses, isLoading, error } = useAddresses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center flex-col gap-5 p-5 bg-white rounded-lg">
        <LuLoader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red text-lg font-medium">Error: {error}</p>
    );
  }

  if (!addresses || addresses.length === 0) {
    return null;
  }

  return (
    <div className="flex items-start flex-col gap-10 p-5 bg-white rounded-lg">
      {addresses.map(address => (
        <AddressDetails key={address.id} address={address} />
      ))}
    </div>
  );
};

export default AddressesDetails;
