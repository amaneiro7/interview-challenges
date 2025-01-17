import {SELLER_ID, API_URL} from "@/config";

import {type Product, type Categories, type Category} from "../types";

export const getProducts = (category?: string) => {
  const url = new URL(`${API_URL}/sites/MLA/search`);

  if (!SELLER_ID) throw new Error("No seller id provided");
  url.searchParams.append("seller_id", SELLER_ID);

  if (category) url.searchParams.append("category", category);

  return fetch(url)
    .then((res) => res.json() as Promise<{results: Product[]}>)
    .then((res) => {
      return res.results;
    });
};

export const getCategories = async (products: Product[]) => {
  // https://api.mercadolibre.com/categories/
  const ids = Array.from(new Set(products.map((product) => product.category_id)));

  const allProductCategories = await Promise.all(
    ids.map((id) =>
      fetch(`${API_URL}/categories/${id}`)
        .then((res) => res.json() as Promise<{path_from_root: Categories[]}>)
        .then((res) => res.path_from_root),
    ),
  );

  const draft: Record<string, Category> = {};

  allProductCategories.forEach((productCategories) => {
    productCategories.forEach((singleCategory, index) => {
      const {id} = singleCategory;
      const parent = productCategories[index - 1] as Categories | undefined;
      const parentId = parent?.id ?? null;

      draft[id] = {...singleCategory, parentId};
    });
  });

  return Object.values(draft);
};
