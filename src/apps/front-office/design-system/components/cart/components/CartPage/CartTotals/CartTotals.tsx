import styles from "./styles.module.scss";
export type CartTotalsProps = {
  // props go here
};
export default function CartTotals() {
  return (
    <div className={styles.total}>
      <div className="progress"></div>
      <div className="pt-3 pb-3 border-b-2 border-borderLight font-bold text-base uppercase">
        Cart totals
      </div>
      <div className="pt-5 pb-5 border-b-2 border-borderLight text-base uppercase flex justify-between">
        <h3 className="font-semibold">Subtotal</h3>
        <p className="font-bold text-base">$3,830.00</p>
      </div>
      <div>
        <h3 className="pt-5 pb-5 uppercase font-bold text-base ">
          Estimate shipping rates:
        </h3>
      </div>
      <div>
        <form>
          <label>Country</label>
          <select
            id="example-select"
            className="block w-full mt-1 border border-gray-300 rounded-full py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-lightGray">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </form>
      </div>
    </div>
  );
}
