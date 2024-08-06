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
        className={`${styles.cartWrapper} container flex justify-between bg-white my-5 p-0`}>
        <CartDetails />
        <CartTotals />
      </div>
    </>
  );
}
