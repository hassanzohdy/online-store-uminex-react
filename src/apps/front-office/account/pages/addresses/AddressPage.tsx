import AddAddressForm from "../../components/AddAddressForm";
import AddressesDetails from "../../components/AddressesDetails";

const AddressPage = () => {
  return (
    <div className="px-4">
      <div
        className="w-full max-w-[1450px] mx-auto px-4 py-8 my-10 
        ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <AddAddressForm />
          <AddressesDetails />
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
