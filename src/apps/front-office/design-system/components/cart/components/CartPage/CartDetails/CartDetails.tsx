import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "./styles.module.scss";
export type CartDetailsProps = {
  // props go here
};
export default function CartDetails() {
  return (
    <div className={`${styles.details} px-8`}>
      <div className={styles.detailsHeader}>
        <ul
          className={`${styles.list} pt-8 pb-8 border-y-2 border-borderLight`}>
          <li>Product</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
      </div>
      <div className={styles.detailsBody}>
        <div
          className={`${styles.product} pt-7 pb-7 border-b-2 border-borderLight`}>
          <div
            className={`${styles.productData} flex gap-4 items-center justify-between`}>
            <div className="flex gap-3 items-center">
              <div className={`${styles.productImg} w-24`}>
                <img
                  src="//demo-uminex.myshopify.com/cdn/shop/products/products_13_1_grande.jpg?v=1672302391"
                  className="w-24"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className="text-primary font-text-sm font-semibold">
                  Dell Vostro 3888 i9 8GB 512GB
                </h3>
                <p className="text-primary font-text-sm font-semibold">
                  - Win10
                </p>
                <div className="priceWrapper flex gap-2">
                  <span className="text-secondary text-base font-semibold ">
                    $900.00
                  </span>
                  <del className="text-darkGray semibold text-base">
                    $928.00
                  </del>
                </div>
              </div>
            </div>

            <div
              className={`${styles.productCounter} flex items-center gap-5 `}>
              <div>
                <FiMinus color="#888" />
              </div>
              <div className="number"> 04</div>
              <div>
                <FiPlus color="#888" />
              </div>
            </div>
            <div className={`${styles.productTotal} `}>
              <h3 className="text-primary font-text-sm font-semibold">
                $3,600.00
              </h3>
            </div>
            <div className={styles.productDelete}>
              <RiDeleteBin5Line />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.detailsFooter} flex justify-between mt-5 border-b-2 border-borderLight pb-5`}>
        <Button className=" p-6 rounded-full uppercase" variant="primary">
          {trans("continueShopping")}
        </Button>
        <Button className=" p-6 rounded-full uppercase" variant="primary">
          {trans("deleteAll")}
        </Button>
      </div>
      <div className="my-4">
        <label className="font-semibold block mb-3 font-base font-bold uppercase">
          Add Order Note
        </label>
        <textarea className="block text-grayColor h-32 w-full mt-1  border-0 rounded-3xl py-4 px-4 text-gray-900 shadow-sm focus:outline-none border-borderGray border sm:text-sm bg-lightGray focus:bg-white ">
          how can i help you ?
        </textarea>
      </div>
    </div>
  );
}
