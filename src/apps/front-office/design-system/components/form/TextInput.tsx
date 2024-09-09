import {
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export type TextInputProps = FormControlProps & {
  minLength?: number;
};

export default function TextInput(props: TextInputProps) {
  const { value, changeValue, error, id, otherProps } = useFormControl({
    rules: [requiredRule, minLengthRule],
    ...props,
  });

  return (
    <>
      <input
        id={id}
        type="text"
        value={value}
        className="w-full border-solid border-borderLight border-[1px] p-2 h-12 rounded-[50px] placeholder-black placeholder:text-sm focus:border-blue outline-none"
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      {error && <div>{error}</div>}
    </>
  );
}
