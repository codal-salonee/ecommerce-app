import type { ProductsSection } from "@/sanity/types";
import ProductCard from "./product-card";
import Section from "./section";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductsSection({
  title,
  viewAllLink,
  products,
}: ProductsSection) {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href={viewAllLink?.internalLink?.slug?.current}>
          <Button>View All</Button>
        </Link>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              productDetails={product}
              categoryName={product?.productCategory?.[0]?.name}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
