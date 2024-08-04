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
      <div className={styles.detailsBody}>
        <div className={styles.product}>
          <div className={styles.productData}>
            <div className={styles.productImg}>
              <img
                src="//demo-uminex.myshopify.com/cdn/shop/products/products_13_1_grande.jpg?v=1672302391"
                className="w-24"
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className="text-primary font-text-sm font-semibold">
                Dell Vostro 3888 i9 8GB 512GB
              </h3>
              <p className="text-primary font-text-sm font-semibold">- Win10</p>
              <div>
                <span className="text-secondary text-base font-semibold ">
                  $900.00
                </span>{" "}
                <del className="text-darkGray semibold">sss</del>
              </div>
            </div>
          </div>
          <div className={styles.productCounter}>ssssss</div>
          <div className={styles.productDelete}></div>
        </div>
      </div>
      <div className={styles.detailsFooter}></div>
    </div>
  );
}
