import { addressesAtom } from "app/account/atoms/address-atom";
import { useEffect, useState } from "react";
import CheckoutFormComponent from "./CheckoutFormComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";

export default function CheckoutFormContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const addresses = addressesAtom.value;

  const defaultAddress = addresses?.find(address => address.isPrimary);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CheckoutFormLoadingComponent />;
  }

  return <CheckoutFormComponent address={defaultAddress} />;
}
