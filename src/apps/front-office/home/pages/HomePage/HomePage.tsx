import { preload } from "@mongez/react-utils";
import { getHome } from "apps/front-office/home/services/home-service";
import CategoryList from "../../components/CategoryList";
import "./HomePage.css";

function _HomePage() {
  return (
    <>
      <CategoryList />
    </>
  );
}
const HomePage = preload(_HomePage, getHome);

export default HomePage;
