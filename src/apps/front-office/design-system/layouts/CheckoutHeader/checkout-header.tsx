import { Link } from "@mongez/react-router";
import URLS from "app/utils/urls";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Logo from "../../components/Logo";

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
