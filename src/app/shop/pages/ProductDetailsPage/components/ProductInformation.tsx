import { trans } from "@mongez/localization";
import { isLTR } from "shared/utils/helpers";
import { translateText } from "shared/utils/translate-text";

import { Preview } from "app/shop/pages/ProductDetailsPage/components/Preview";
import Reviews from "app/shop/pages/ProductDetailsPage/components/reviews/Reviews";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "design-system/components/ui/tabs";
import { Product } from "shared/utils/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductInformation({ product }: ProductDetailsProps) {
  return (
    <div className="my-5 w-full max-w-[1400px] mx-auto py-5 px-4 bg-white">
      <Tabs
        dir={isLTR() ? "ltr" : "rtl"}
        defaultValue="description"
        className="w-full md:px-10 overflow-x-auto overflow-y-hidden scrollbar">
        <TabsList className="min-w-full bg-white border-b border-slate-200 gap-10 rounded-none mb-5 overflow-y-hidden overflow-x-auto scrollbar">
          <TabsTrigger
            value="description"
            className="uppercase text-sm font-semibold pb-2 hover:text-blue hover:border-b-[2.5px] transition hover:border-blue data-[state=active]:bg-white data-[state=active]:border-b-[2.5px] data-[state=active]:border-blue rounded-none data-[state=active]:text-blue data-[state=active]:shadow-none">
            {trans("Description")}
          </TabsTrigger>
          <TabsTrigger
            value="shipping"
            className="uppercase text-sm font-semibold pb-2 hover:text-blue hover:border-b-[2.5px] transition hover:border-blue data-[state=active]:bg-white data-[state=active]:border-b-[2.5px] data-[state=active]:border-blue rounded-none data-[state=active]:text-blue data-[state=active]:shadow-none">
            {trans("Shipping & Return")}
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="uppercase text-sm font-semibold pb-2 hover:text-blue hover:border-b-[2.5px] transition hover:border-blue data-[state=active]:bg-white data-[state=active]:border-b-[2.5px] border-blue rounded-none data-[state=active]:text-blue data-[state=active]:shadow-none">
            {trans("Reviews")}
          </TabsTrigger>
        </TabsList>
        {product.description && product.description[0].value ? (
          <TabsContent
            value="description"
            className="w-full text-gray font-medium text-base">
            <Preview value={translateText(product.description) || ""} />
          </TabsContent>
        ) : (
          <TabsContent
            value="description"
            className="w-full text-gray font-medium text-sm italic">
            {trans("No Description")}
          </TabsContent>
        )}

        <TabsContent value="shipping">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-sm uppercase text-primary font-bold">
              {trans("Shipping")}
            </h1>
            <div className="flex flex-col items-start gap-1 text-darkGray text-sm font-medium">
              <h1>
                {trans(
                  "Complimentary ground shipping within 1 to 7 business days",
                )}
              </h1>
              <h1>
                {trans(
                  "In-store collection available within 1 to 7 business days",
                )}
              </h1>
              <h1>
                {trans("Next-day and Express delivery options also available")}
              </h1>
              <h1>
                {trans(
                  "Purchases are delivered in an orange box tied with a Boldu ribbon, with the exception of certain items",
                )}
              </h1>
              <h1>
                {trans(
                  "See the delivery FAQs for details on shipping methods, costs and delivery times",
                )}
              </h1>
            </div>
            <h1 className="text-sm uppercase text-primary font-bold">
              {trans("RETURNS AND EXCHANGES")}
            </h1>
            <div className="flex flex-col items-start gap-1 text-darkGray text-sm font-medium">
              <h1>{trans("Easy and complimentary, within 14 days")}</h1>
              <h1>
                {trans("See conditions and procedure in our return FAQs")}
              </h1>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <Reviews productId={product.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
