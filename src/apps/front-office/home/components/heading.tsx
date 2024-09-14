import { isRTL } from "app/utils/helpers";
import { LocalizedText } from "design-system/utils/types";

type HeadingProps = {
  title: LocalizedText[];
};

export default function Heading({ title }: HeadingProps) {
  return (
    <h1 className="font-bold text-md text-primary uppercase">
      {isRTL()
        ? title.find(n => n.localeCode === "ar")?.value
        : title.find(n => n.localeCode === "en")?.value}
    </h1>
  );
}
