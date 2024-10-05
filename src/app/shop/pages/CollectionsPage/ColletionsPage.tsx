import CategoryCard from "app/shop/pages/CollectionsPage/components/CollectionCard";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import { Skeleton } from "design-system/components/ui/skeleton";
import { getCategories } from "design-system/services/category-services";
import { useFetchData } from "shared/hooks/use-fetch-data";

export default function CollectionsPage() {
  const { data, isLoading } = useFetchData(getCategories);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-1 w-full max-w-[1440px] mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              className="max-h-[400px] md:h-[415px] lg:h-[400px]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-lightGray">
      <Breadcrumbs title="Shop" image />
      <div className="w-full max-w-[1440px] mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">
          {data &&
            data?.categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
