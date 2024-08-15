import { Link } from "@mongez/react-router";
import { cn } from "apps/front-office/design-system/lib/utils";

type IRoute = {
  label: string;
  path: string;
  icon: React.ReactNode;
  data?: number;
};
interface AccountSidebarRouteProps {
  route: IRoute;
}
const AccountSidebarRoute = ({ route }: AccountSidebarRouteProps) => {
  return (
    <Link
    href={route.path}
      className={cn(
        "w-full px-2 py-4 flex items-center justify-start gap-2 bg-slate-100",
        "hover:bg-slate-900 hover:text-white transition-all rounded-md",
        route.label === "Dashboard" && "bg-blue text-white",
      )}>
      {route.icon}
      <p className={cn("text-md")}>{route.label.toUpperCase()}</p>
      {route.data!>=0 &&  <span className="text-md">({route.data})</span>}
    </Link>
  );
};

export default AccountSidebarRoute;
