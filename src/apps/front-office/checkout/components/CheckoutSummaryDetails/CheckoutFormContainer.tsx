import { useUser } from "apps/front-office/design-system/hooks/useUser";
import CheckoutFormComponent from "./checkoutFormComponent";
import CheckoutFormErrorComponent from "./CheckoutFormErrorComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";

export default function CheckoutFormContainer() {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return <CheckoutFormLoadingComponent />;
  }

  if (error) {
    return <CheckoutFormErrorComponent />;
  }

  if (data) {
    const user = data;
    return <CheckoutFormComponent user={user} />;
  }
}
