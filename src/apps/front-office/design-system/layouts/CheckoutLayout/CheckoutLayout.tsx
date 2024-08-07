import { Separator } from "../../components/ui/separator";
import CheckoutHeader from "../CheckoutHeader";

export type CheckoutLayoutProps = {
  children: React.ReactNode;
};

/**
 * Checkout layout can be used to wrap all pages
 */
export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-[1450px] mx-auto px-4">
        <CheckoutHeader />
      </div>
      <Separator />
      <main className="w-full min-h-screen">{children}</main>
    </div>
  );
}
