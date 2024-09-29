import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { useNewsletter } from "app/shared/hooks/use-newsletter";
import EmailInput from "design-system/components/form/EmailInput";
import SubmitButton from "design-system/components/form/SubmitButton";

export default function SubscribeToNewsletter() {
  const { submit } = useNewsletter();

  return (
    <Form
      onSubmit={submit}
      className="w-full flex flex-col mobile:flex-row justify-start items-center my-4">
      <div className="w-full md:w-auto my-2 mx-1 flex-grow-[3] md:flex-grow-[2] ">
        <EmailInput required name="email" placeholder={trans("yourEmail")} />
      </div>
      <div className=" w-full md:w-auto flex-grow-[2]  mobile:w-52">
        <SubmitButton className="w-full bg-blue text-white p-4 h-12 rounded-[50px] font-bold text-xs leading-4 uppercase">
          {trans("subscribe")}
        </SubmitButton>
      </div>
    </Form>
  );
}
