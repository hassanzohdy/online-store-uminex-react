import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { cn } from "apps/front-office/design-system/lib/utils";
import { useState } from "react";
import { IoReload } from "react-icons/io5";

const CheckoutFormErrorComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const reloadPage = () => {
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 max-w-[650px] px-4">
      <h1 className="text-center text-red text-lg font-semibold">
        {trans("Something went wrong, Try Again Later.")}
      </h1>
      <Button variant={"primary"} onClick={reloadPage}>
        <IoReload className={cn("w-4 h-4 mr-2", isLoading && "animate-spin")} />
        {trans("Reload The Page")}
      </Button>
    </div>
  );
};

export default CheckoutFormErrorComponent;
