"use client";

import { PRODUCT_LIST_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import type { PRODUCT_LISTING_QUERYResult } from "@/sanity/types";
import { useState } from "react";
import FilterSort from "./filter-sort";
import ProductCard from "./product-card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ProductListing({
  productsData,
  pageSize,
  totalProducts,
}: {
  productsData: PRODUCT_LISTING_QUERYResult;
  pageSize: number;
  totalProducts: number;
}) {
  const { products, category } = productsData;
  const [allProducts, setAllProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const hasMore = totalProducts > allProducts.length;

  return (
    <div className="min-h-screen bg-background">
      {/* -- Page Header -- */}
      <div className="bg-background border-b border-[#e8e4df]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <p className="text-sm text-foreground tracking-wide max-w-md mx-auto leading-relaxed">
            {category?.headerContent}
          </p>
        </div>
      </div>

      {/* -- Filters & Sort -- */}
      <FilterSort />

      {/* -- Product Grid -- */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-[0.65rem] tracking-widest uppercase text-foreground mb-8">
          {totalProducts} {totalProducts === 1 ? "gift" : "gifts"} found
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allProducts.map((product) => (
            <ProductCard
              key={product._id}
              productDetails={product}
              categoryName={category?.name}
            />
          ))}
        </div>

        {/* -- Load More -- */}
        {hasMore && (
          <div className="mt-14 text-center">
            <Button
              variant="outline"
              className="rounded-none border-foreground text-foreground text-[0.7rem] tracking-widest uppercase px-10 py-5 hover:bg-foreground hover:text-white transition-colors duration-300"
              onClick={async () => {
                const nextPageProducts = await client.fetch(
                  PRODUCT_LIST_QUERY,
                  {
                    categorySlug: category?.slug.current,
                    start: currentPage * pageSize,
                    end: (currentPage + 1) * pageSize,
                  },
                );
                setCurrentPage((prevPage) => prevPage + 1);
                setAllProducts((prevProducts) => [
                  ...prevProducts,
                  ...nextPageProducts,
                ]);
              }}
            >
              Load More
            </Button>
          </div>
        )}
      </div>

      <Separator className="bg-background" />

      {/* -- Page Footer Content -- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Free Shipping",
              desc: "On all orders over ₹999. Delivered in 3–5 business days.",
              icon: "🚚",
            },
            {
              title: "Easy Returns",
              desc: "Changed your mind? Return within 30 days, no questions asked.",
              icon: "↩️",
            },
            {
              title: "Sustainably Made",
              desc: "Every piece crafted with ethically sourced materials.",
              icon: "🌿",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="font-serif text-base font-semibold text-foreground tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-foreground leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <Separator className="bg-[#e8e4df] my-12" />

        <div className="text-center">
          <p className="text-xs text-foreground tracking-wider max-w-sm mx-auto leading-relaxed">
            {category?.footerContent}
          </p>
        </div>
      </div>
    </div>
  );
}
