import Helmet from "@mongez/react-helmet";
import CartDetails from "./CartDetails";
import CartTotals from "./CartTotals";
import styles from "./styles.module.scss";

export default function CartPage() {
  return (
    <>
      <Helmet title="Cart Page" />

      <div
        className={`${styles.cartWrapper} container flex justify-between bg-white  py-8 px-0 my-7`}>
        <div className="container">
          <div
            className={`${styles.cartWrapper} container flex justify-between bg-white  p-0`}>
            <CartDetails />
            <CartTotals />
          </div>
        </div>
      </div>
    </>
  );
}
