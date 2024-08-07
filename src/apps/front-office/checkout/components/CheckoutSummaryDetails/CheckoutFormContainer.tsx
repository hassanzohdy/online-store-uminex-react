import { useUser } from "apps/front-office/design-system/hooks/use-user";
import CheckoutFormErrorComponent from "./CheckoutFormErrorComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";
import CheckoutFormComponent from "./CheckoutFormComponent";

const CheckoutFormContainer = () => {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return <CheckoutFormLoadingComponent />;
  }

  if (error) {
    return <CheckoutFormErrorComponent />;
  }
  if (data) {
    const { user } = data;

    return <CheckoutFormComponent user={user} />;
  }
};

export default CheckoutFormContainer;
