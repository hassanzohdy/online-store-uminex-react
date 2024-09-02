import { trans } from "@mongez/localization";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "apps/front-office/design-system/components/ui/accordion";
import CheckoutFormContainer from "../../components/CheckoutForm/CheckoutFormContainer";
import CheckoutSummaryDetails from "../../components/CheckoutSummaryDetails/CheckoutSummaryDetails";

export default function CheckoutPage() {
  const [isOpen, setIsOpen] = useState<string>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
      <div className="w-full flex md:items-end flex-col gap-5">
        <div className="block md:hidden w-full">
          <Accordion
            type="single"
            collapsible
            className="h-full max-h-[400px] overflow-y-auto border-b-0 bg-[#F1F1F1]"
            value={isOpen}
            onValueChange={setIsOpen}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lightAqua px-3">
                {isOpen === "item-1"
                  ? trans("hideOrderSummary")
                  : trans("showOrderSummary")}
              </AccordionTrigger>
              <AccordionContent className="py-4 border-b-0">
                <CheckoutSummaryDetails />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:border-r-[1px] border-slate-200 w-full min-h-full col-span-1">
          <CheckoutFormContainer />
        </div>
      </div>
      <div className="w-full min-h-full bg-zinc-100 p-5 hidden md:block">
        <CheckoutSummaryDetails />
      </div>
    </div>
  );
}
