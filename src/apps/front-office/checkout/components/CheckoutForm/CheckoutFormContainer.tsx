import { navigateBack } from "@mongez/react-router";

import { addressesAtom } from "app/account/atoms/address-atom";
import { useUser } from "design-system/hooks/useUser";
import CheckoutFormComponent from "./CheckoutFormComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";

export default function CheckoutFormContainer() {
  const { data: user, isLoading, error } = useUser();
  const addresses = addressesAtom.value;

  const defaultAddress = addresses?.find(address => address.isPrimary);

  if (isLoading) {
    return <CheckoutFormLoadingComponent />;
  }

  if (error) {
    return navigateBack();
  }

  if (user) {
    return <CheckoutFormComponent user={user} address={defaultAddress} />;
  }
}
