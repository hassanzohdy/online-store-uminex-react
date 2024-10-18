import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Link, navigateTo, queryString } from "@mongez/react-router";
import { login } from "app/account/services/auth";
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
import { LoginFormSchema } from "shared/schemas/login-form-schema";
import URLS from "shared/utils/urls";

export default function LoginForm() {
  const origin = queryString.get("origin");
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    try {
      await login(data);
      toast({
        variant: "success",
        title: trans("successLogin"),
      });
      form.reset();
      if (origin) {
        navigateTo(`${URLS.home}/${origin}`);
      } else {
        navigateTo(URLS.home);
      }
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
          {trans("login")}
        </h1>
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
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
          <Link
            href={URLS.auth.forgetPassword}
            className="text-cyan-600 text-sm">
            {trans("forgotPassword")}
          </Link>
        </div>
        <Button
          variant={"primary"}
          size={"lg"}
          className="w-full rounded-full h-12">
          {trans("login")}
        </Button>
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
          className="w-full rounded-full h-12 border-blue">
          <Link href={URLS.auth.login}>{trans("createAccount")}</Link>
        </Button>
      </form>
    </Form>
  );
}
