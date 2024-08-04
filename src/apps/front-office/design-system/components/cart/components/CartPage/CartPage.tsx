import Helmet from "@mongez/react-helmet";
import CartDetails from "./CartDetails";
import CartTotals from "./CartTotals";
import styles from "./styles.module.scss";
export type CartPagePops = {
  // props go here
};
export default function CartPage() {
  return (
    <>
      <Helmet title="Cart Page" />
      <div
        className={`${styles.cartWrapper} container grid gap-2 grid-cols-2 bg-white`}>
        <CartDetails />
        <CartTotals />
      </div>
    </>
  );
}
