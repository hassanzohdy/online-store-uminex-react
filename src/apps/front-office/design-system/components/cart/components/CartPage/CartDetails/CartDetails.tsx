import styles from "./styles.module.scss";
export type CartDetailsProps = {
  // props go here
};
export default function CartDetails() {
  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <ul className={styles.list}>
          <li>Product</li>
          <li>Product</li>
          <li>Product</li>
        </ul>
      </div>
      <div className={styles.detailsBody}></div>
      <div className={styles.detailsFooter}></div>
    </div>
  );
}
