import { trans } from "@mongez/localization";
import { useAddresses } from "apps/front-office/design-system/hooks/useAddress";
import { useWishlist } from "apps/front-office/design-system/hooks/useWishlist";
import URLS from "apps/front-office/utils/urls";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import AccountSidebarRoute from "./AccountSidebarRoute";

export default function AccountSidebar() {
  const { data: wishlist } = useWishlist();
  const { data: addresses } = useAddresses();

  const accountSidebarRoutes = [
    {
      label: trans("dashboard"),
      path: URLS.auth.root,
      icon: <RxDashboard className="w-5 h-5" />,
    },
    {
      label: trans("CheckOut"),
      path: URLS.checkout,
      icon: <IoMdCheckmarkCircleOutline className="w-5 h-5" />,
    },
    {
      label: trans("Address"),
      path: URLS.auth.addresses,
      icon: <IoLocationOutline className="w-5 h-5" />,
      data: addresses && addresses.length,
    },
    {
      label: trans("Wishlist"),
      path: URLS.wishlist,
      icon: <FaRegHeart className="w-5 h-5" />,
      data: wishlist && wishlist.totalWishlist,
    },
    {
      label: trans("logout"),
      path: URLS.auth.logout,
      icon: <MdOutlineLogout className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex items-start gap-3 flex-col px-5">
      {accountSidebarRoutes.map(route => (
        <AccountSidebarRoute key={route.label} route={route} />
      ))}
    </div>
  );
}
