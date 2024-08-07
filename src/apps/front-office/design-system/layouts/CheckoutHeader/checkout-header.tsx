import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Logo from "../../components/Logo";

const CheckoutHeader = () => {
  return (
    <>
      <div className="flex items-center py-4 justify-between">
        <Logo />
        <Link href={URLS.cart}>
          <LiaShoppingBagSolid className="text-lightAqua w-7 h-7" />
        </Link>
      </div>
    </>
  );
};

export default CheckoutHeader;
