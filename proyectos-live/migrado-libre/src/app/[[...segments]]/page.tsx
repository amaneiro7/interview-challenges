import {getProducts} from "@/services";
import {Products} from "@/components/products";

export default async function ProductsPage({
  params: {
    segments: [category],
  },
}: {
  params: {segments: string[]};
}) {
  const products = await getProducts(category);

  return <Products products={products} />;
}
