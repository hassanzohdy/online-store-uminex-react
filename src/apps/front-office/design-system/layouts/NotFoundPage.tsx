import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";

export default function NotFoundPage() {
  return (
    //TODO: @m_abosalem - add not found page
    <>
      <Helmet title={trans("notFoundPage")} />
    </>
  );
}
