import endpoint from "shared/endpoint";

let useApi = false;
export function getCategories() {
  return mock(
    {
      categories: [
        {
          id: "1",
          label: "Accessories",
          value: "accessories",
        },
        {
          id: "2",
          label: "Clothing",
          value: "clothing",
        },
        {
          id: "3",
          label: "Electronics",
          value: "electronics",
        },
        {
          id: "4",
          label: "Bags For Men",
          value: "bags-for-men",
        },
        {
          id: "5",
          label: "Bags For Women",
          value: "bags-for-women",
        },
        {
          id: "6",
          label: "Cameras",
          value: "Cameras",
        },
        {
          id: "7",
          label: "Laptops",
          value: "Laptops",
        },
        {
          id: "8",
          label: "Smartphones",
          value: "Smartphones",
        },
        {
          id: "9",
          label: "Headphones",
          value: "Headphones",
        },
      ],
    },
    () => endpoint.get("/categories"),
  );
}

export function getProducts(query: string) {
  return mock(
    {
      products: [
        { name: "Apple iPhone 13", category: "Smartphones" },
        { name: "Samsung Galaxy S21", category: "Smartphones" },
        { name: "Sony WH-1000XM4 Headphones", category: "Headphones" },
        { name: "Dell XPS 13 Laptop", category: "Laptops" },
        { name: "Nikon D3500 DSLR Camera", category: "Cameras" },
        { name: "Apple MacBook Pro", category: "Laptops" },
        { name: "Samsung Galaxy Buds", category: "Headphones" },
      ],
    },
    () => endpoint.get("/products?q=" + query),
  ).then(data => {
    if (!query || useApi) return data;

    const filteredProducts = data.products.filter(
      (product: { name: string; category: string }) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    );

    return { products: filteredProducts };
  });
}

const mock = (data: any, promiseCallback: any) => {
  if (useApi) {
    return promiseCallback();
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
