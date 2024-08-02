import { preload } from "@mongez/react-utils";
import ProductCard from "apps/front-office/design-system/components/ProductCard";
import CategoryList from "apps/front-office/home/components/CategoryList";
import { getHome } from "apps/front-office/home/services/home-service";
import "./HomePage.css";

function _HomePage() {
  return (
    <>
      <CategoryList />

      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 2xl:grid-cols-6">
        <ProductCard
          image={[
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_23_1.jpg?v=1672305891&width=360",
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_23_2.jpg?v=1672305892&width=360",
          ]}
          customStyle=" mb-1 "
          path="/"
          priceBefore={200}
          priceAfter={150}
          rate={1}
          reviews={5}
          availableQuantity={80}
          // hotDeals
          totalQuantityinStock={300}
          title="Apple Airpods Pro MWP22A M/A Bluetooth"
        />
        {/* <ProductCard
          image={[
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_23_1.jpg?v=1672305891&width=360",
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_23_2.jpg?v=1672305892&width=360",
          ]}
          customStyle=" mb-1 "
          path="/"
          priceBefore={200}
          priceAfter={150}
          rate={1}
          reviews={5}
          availableQuantity={0}
          totalQuantityinStock={200}
          hotDeals
          title="Apple Airpods Pro MWP22A M/A Bluetooth dasdsadsadsad"
        /> */}
      </div>
    </>
  );
}
const HomePage = preload(_HomePage, getHome);

export default HomePage;
