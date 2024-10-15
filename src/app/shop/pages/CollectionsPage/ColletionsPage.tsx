import CategoryCard from "app/shop/pages/CollectionsPage/components/CollectionCard";
import { categoryAtom } from "design-system/atoms/category-atom";
import Breadcrumbs from "design-system/components/Breadcrumbs";

export default function CollectionsPage() {
  const data = categoryAtom.value;

  return (
    <div className="w-full h-full bg-lightGray">
      <Breadcrumbs title="Shop" image />
      <div className="w-full max-w-[1440px] mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">
          {data.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
