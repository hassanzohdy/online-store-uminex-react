import { trans } from "@mongez/localization";

export default function CheckoutFormErrorComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 max-w-[650px] px-4">
      <h1 className="text-center text-red text-lg font-semibold">
        {trans("Something went wrong, Try Again Later.")}
      </h1>
    </div>
  );
}
