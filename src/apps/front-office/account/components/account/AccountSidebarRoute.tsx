import { Link } from "@mongez/react-router";
import { cn } from "design-system/lib/utils";

type RouteType = {
  label: string;
  path: string;
  icon: React.ReactNode;
  data?: number | null;
};

interface AccountSidebarRouteProps {
  route: RouteType;
}

export default function AccountSidebarRoute({
  route,
}: AccountSidebarRouteProps) {
  return (
    <Link
      href={route.path}
      className={cn(
        "w-full px-2 py-3 flex items-center justify-start gap-2 text-slate-700 bg-[#f6f6f6]",
        "hover:bg-slate-900 hover:text-white transition-all rounded-sm text-sm",
        route.label === "Dashboard" && "bg-blue text-white",
      )}>
      {route.icon}
      <p className={cn("font-semibold")}>{route.label.toUpperCase()}</p>
      {route.data! >= 0 && (
        <span className="font-semibold">({route.data})</span>
      )}
    </Link>
  );
}
