import ProductListing from "@/components/product-listing";
import { PRODUCT_LISTING_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

const PAGE_SIZE = 4;

export default async function ProductListingPage({
  params,
  searchParams,
}: {
  params: Promise<{ listing: string[] }>;
  searchParams: Promise<{ sortOf?: string; sortBy?: string; filter: string }>;
}) {
  const { listing: categoryList } = await params;
  const categorySlug = categoryList.pop();
  const { filter = "" } = await searchParams;

  const { data: productsData } = await sanityFetch({
    query: PRODUCT_LISTING_QUERY,
    params: {
      categorySlug,
      sortOrder: "asc",
      start: 0,
      end: PAGE_SIZE,
      filter,
    },
  });

  return (
    <ProductListing
      key={filter}
      productsData={productsData}
      pageSize={PAGE_SIZE}
      totalProducts={productsData.totalProducts}
    />
  );
}
