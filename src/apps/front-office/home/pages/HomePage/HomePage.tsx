import { preload } from "@mongez/react-utils";
import CategoryList from "apps/front-office/home/components/Categories/CategoryList";
import { getHome } from "apps/front-office/home/services/home-service";
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
