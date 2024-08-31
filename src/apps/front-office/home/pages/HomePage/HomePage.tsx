
import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { preload } from "@mongez/react-utils";
import CategoryList from "apps/front-office/home/components/CategoryList";
import { getHome } from "apps/front-office/home/services/home-service";
import { appName } from "shared/flags";
// import "./HomePage.css";

function _HomePage() {
  return (
    <>
      <Helmet title={trans("homePage")} appName={appName} />
      <CategoryList />
    </>
  );
}
const HomePage = preload(_HomePage, getHome);

export default HomePage;
