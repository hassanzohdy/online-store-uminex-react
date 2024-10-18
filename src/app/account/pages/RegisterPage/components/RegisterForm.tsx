import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Link, navigateTo } from "@mongez/react-router";
import { register } from "app/account/services/auth";
import { Button } from "design-system/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { toast } from "shared/hooks/use-toast";
import { RegisterFormSchema } from "shared/schemas/register-form-schema";
import URLS from "shared/utils/urls";

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof RegisterFormSchema>) => {
    try {
      const res = await register(data);
      console.log(res);
      toast({
        variant: "success",
        title: trans("accountCreatedSuccessfully"),
        description: trans("verificationCodeSent"),
      });
      form.reset();
      navigateTo(URLS.auth.verifyEmail);
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: error.response.data.messages[0].error,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 w-full max-w-[750px] bg-white rounded-lg p-5 md:p-10"
        onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-primary text-center text-xl md:text-2xl font-semibold">
          {trans("createAccount")}
        </h1>
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("firstName")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={trans("firstName")}
                    disabled={isLoading}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("LastName")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={trans("LastName")}
                    disabled={isLoading}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("email")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    placeholder={trans("email")}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("phoneNumber")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    placeholder={trans("phoneNumber")}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("password")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    disabled={isLoading}
                    {...field}
                    placeholder={trans("password")}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("confirmPassword")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    disabled={isLoading}
                    {...field}
                    placeholder={trans("confirmPassword")}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant={"primary"}
          size={"lg"}
          className="w-full rounded-full h-12">
          {trans("createAccount")}
        </Button>
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
          className="w-full rounded-full h-12 border-blue">
          <Link href={URLS.auth.login}>{trans("login")}</Link>
        </Button>
      </form>
    </Form>
  );
}
