import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { preload } from "@mongez/react-utils";
import CategoryList from "app/home/components/CategoryList";
import { getHome } from "app/home/services/home-service";

function _HomePage() {
  return (
    <>
      <Helmet title={trans("homePage")} appendAppName={false} />
      <CategoryList />
    </>
  );
}

const HomePage = preload(_HomePage, getHome);

export default HomePage;
