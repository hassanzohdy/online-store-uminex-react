import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Calendar } from "apps/front-office/design-system/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "apps/front-office/design-system/components/ui/form";
import { Input } from "apps/front-office/design-system/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "apps/front-office/design-system/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "apps/front-office/design-system/components/ui/tooltip";
import { cn } from "apps/front-office/design-system/lib/utils";
import { format } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import { BsQuestionCircle } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
interface CardDetailsInputsProps {
  form: UseFormReturn<
    {
      cardNumber: string;
      cardName: string;
      expirationDate: Date;
      cvv: string;
      address: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      country: string;
      state: string;
      city: string;
      zipCode: string;
      apartment?: string | undefined;
    },
    any,
    undefined
  >;
}
const formatCardNumber = value => {
  return value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
};

const unFormatCardNumber = value => {
  return value.replace(/\s/g, "");
};

const CardDetailsInputs = ({ form }: CardDetailsInputsProps) => {
  const currentLanguage = current("localeCode");

  return (
    <div className="w-full space-y-8 my-8">
      <div>
        <h1 className="text-2xl text-black mb-2">{trans("payment")}</h1>
        <p className="text-base text-slate-500">
          {trans("transactionsEncrypted")}
        </p>
      </div>
      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="Card Number"
                  className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                  value={formatCardNumber(field.value)}
                  onChange={e => {
                    const formattedValue = formatCardNumber(e.target.value);
                    field.onChange(unFormatCardNumber(formattedValue));
                  }}
                />
                <CiLock
                  className={cn(
                    "w-6 h-6 text-slate-600 absolute top-5",
                    currentLanguage === "en" && "right-5",
                    currentLanguage === "ar" && "left-5",
                  )}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex items-center gap-3 w-full flex-wrap lg:flex-nowrap">
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[300px] pl-3 text-left font-normal h-16 text-slate-500",
                      )}>
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Expiration Date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value as any}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <div className="w-full relative">
                  <Input
                    className="w-full h-16 text-base focus:ring-lightAqua focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                    placeholder={trans("SecurityCode")}
                    {...field}
                    maxLength={3}
                    onChange={e => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        field.onChange(value);
                      }
                    }}
                  />
                  <div
                    className={cn(
                      "text-slate-600 absolute top-5",
                      currentLanguage === "en" && "right-5",
                      currentLanguage === "ar" && "left-5",
                    )}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <BsQuestionCircle className={cn("w-5 h-5")} />
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-black w-[200px]">
                          <p className="text-white text-sm">
                            {trans("SecurityCodeHover")}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="cardName"
        render={({ field }) => (
          <FormItem
            className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                placeholder={trans("cardName")}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CardDetailsInputs;
