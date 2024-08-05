import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import styles from "./styles.module.scss";
export type CartTotalsProps = {
  // props go here
};
export default function CartTotals() {
  return (
    <div className={`${styles.total} border-blue border-2 rounded-lg p-7`}>
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
          <div className="my-4">
            <label className="font-semibold">Country</label>
            <select
              id="example-select"
              className="block w-full mt-1  border-0 rounded-full py-4 px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-lightGray">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="my-4">
            <label className="font-semibold">State</label>
            <select
              id="example-select"
              className="block w-full mt-1  border-0 rounded-full py-4 px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-lightGray">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="my-4">
            <label className="font-semibold">Zip/Postal Code</label>
            <input
              id="example-select"
              type="text"
              className="block w-full mt-1  border-0 rounded-full py-4 px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-lightGray"></input>
          </div>
          <Button
            className=" p-6 rounded-full uppercase w-full"
            variant="primary">
            {trans("Calculate shipping rates")}
          </Button>
          <div>
            <h3 className="pt-5 pb-5 uppercase font-bold text-base ">Coupon</h3>
            <p>Coupon code will work on checkout page.</p>
            <input
              id="example-select"
              type="text"
              className="block w-full mt-1  border-0 rounded-full py-4 px-4 text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-lightGray"></input>
          </div>
          <div className="pt-5 pb-5 border-b-2 border-borderLight text-base uppercase flex justify-between">
            <h3 className="font-semibold">Subtotal</h3>
            <p className="font-bold text-base">$3,830.00</p>
          </div>
          <Button
            className=" p-6 rounded-full uppercase w-full mt-5"
            variant="primary">
            {trans("Check Out")}
          </Button>
        </form>
      </div>
    </div>
  );
}
