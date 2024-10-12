import { emailRule, requiredRule } from "@mongez/react-form";
import TextInput, { TextInputProps } from "./TextInput";

export type EmailInputProps = TextInputProps;

export default function EmailInput(props: EmailInputProps) {
  return (
    <TextInput {...props} type="email" rules={[requiredRule, emailRule]} />
  );
}
