"use client";

import { resolveSanityUrl } from "@/sanity/lib/image";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductCardProps = {
  // productDetails: NonNullable<NonNullable<ProductsSection["products"]>[number]>;
  productDetails: any;
  categoryName: string | undefined;
};

export default function ProductCard({
  productDetails,
  categoryName,
}: ProductCardProps) {
  const { name, slug, price, images } = productDetails;
  const [wished, setWished] = useState(false);

  const image = resolveSanityUrl(images?.[0]);

  return (
    <Link
      className="group flex flex-col bg-white hover:border-primary hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
      href={`/detail/${slug?.current ?? slug}`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-3/4 bg-background">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          aria-label="Wishlist"
        >
          <Heart
            size={15}
            strokeWidth={1.6}
            className={wished ? "fill-primary text-primary" : "text-foreground"}
          />
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 bg-foreground py-2.5 text-center text-background text-[0.65rem] tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Quick Add
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-3.5 py-3">
        <p className="text-[0.6rem] tracking-widest uppercase text-muted-foreground">
          {categoryName}
        </p>
        <h3 className="text-sm font-medium text-foreground tracking-wide leading-snug">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-sm font-medium text-foreground">
            AED {price}
          </span>
        </div>
      </div>
    </Link>
  );
}
