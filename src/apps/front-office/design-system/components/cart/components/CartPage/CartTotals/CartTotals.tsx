import styles from "./styles.module.scss";
export type CartTotalsProps = {
  // props go here
};
export default function CartTotals() {
  return (
    <div className={styles.total}>
      <div className="progress"></div>
      <div className="pt-3 pb-3 border-b-2 border-borderLight font-bold text-base uppercase">Cart totals</div>
      <div className="pt-3 pb-3 border-b-2 border-borderLight text-base uppercase flex justify-between">
        <h3>Subtotal</h3>
        <p>$3,830.00</p>
      </div>
    </div>
  );
}
