import ProductCard from "apps/front-office/design-system/components/ProductCard";
import CategoryList from "../../components/CategoryList";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <CategoryList />

      <div className="container">
        <ProductCard
          customStyle="w-[250px]"
          image={[
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_19_1.jpg?v=1672303733&width=533",
            "https://demo-uminex.myshopify.com/cdn/shop/products/products_19_2.jpg?v=1672303733&width=360",
          ]}
          title="MackBook Air m1 20208GB 256GB/7-core GPU"
          priceBefore={500}
          priceAfter={250}
          rate={1}
          reviews={1}
          stock
          path="/"
        />
      </div>
    </>
  );
}
