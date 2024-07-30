import CartDetails from "./CartDetails";
import CartTotals from "./CartTotals";

export type CartPageProps = {
  // props go here
};
export default function CartPage() {
  return (
    <>
      <h1>
        <CartDetails />
        <CartTotals />
      </h1>
    </>
  );
}
