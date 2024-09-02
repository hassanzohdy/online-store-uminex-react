import { navigateBack } from "@mongez/react-router";

import { useAddresses } from "apps/front-office/design-system/hooks/useAddress";
import { useUser } from "apps/front-office/design-system/hooks/useUser";
import CheckoutFormComponent from "./CheckoutFormComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";

export default function CheckoutFormContainer() {
  const { data: user } = useUser();
  const { data: addresses, isLoading, error } = useAddresses();

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
