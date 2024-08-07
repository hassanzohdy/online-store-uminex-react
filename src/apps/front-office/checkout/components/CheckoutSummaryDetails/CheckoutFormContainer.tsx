import { useUser } from "apps/front-office/design-system/hooks/use-user";
import CheckoutFormErrorComponent from "./CheckoutFormErrorComponent";
import CheckoutFormLoadingComponent from "./CheckoutFormLoadingComponent";
import CheckoutFormComponent from "./checkoutFormComponent";

const CheckoutFormContainer = () => {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return <CheckoutFormLoadingComponent />;
  }

  if (error) {
    return <CheckoutFormErrorComponent />;
  }
  if (data) {
    console.log(data.user);
    const { user } = data;

    return <CheckoutFormComponent user={user} />;
  }
};

export default CheckoutFormContainer;
