import React from "react";
import CheckoutSummaryDetails from "../../components/CheckoutSummaryDetails";
import CheckoutForm from "../../components/CheckoutSummaryDetails/CheckoutFormContainer";

function _CheckoutPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
      <div className="border-r-[2px] border-slate-200 min-h-full">
        <CheckoutForm />
      </div>
      <div className="w-full min-h-full bg-zinc-100 p-5 hidden md:block sticky">
        <CheckoutSummaryDetails />
      </div>
    </div>
  );
}

const CheckoutPage = React.memo(_CheckoutPage);
export default CheckoutPage;
