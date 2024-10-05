import { Link } from "@mongez/react-router";
import Logo from "layouts/BaseLayout/components/Logo";
import { LiaShoppingBagSolid } from "react-icons/lia";
import URLS from "shared/utils/urls";

export default function CheckoutHeader() {
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
}
