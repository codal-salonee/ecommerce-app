"use client";

import { resolveSanityUrl } from "@/sanity/lib/image";
import { PRODUCT_DETAIL_QUERYResult } from "@/sanity/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ImageSlider({
  images,
}: {
  images: NonNullable<PRODUCT_DETAIL_QUERYResult>["images"];
}) {
  const [mainImage, setMainImage] = useState(0);
  if (!images) return null;
  const prev = () =>
    setMainImage((i) => (i - 1 + images.length) % images.length);
  const next = () => setMainImage((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden bg-[#f0eff6] aspect-square group">
        {images?.length && (
          <Image
            src={resolveSanityUrl(images[mainImage])}
            alt={images[mainImage].caption ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Arrows */}
        <Button
          variant="ghost"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        >
          <ChevronLeft size={18} className="text-gray-700" />
        </Button>
        <Button
          variant="ghost"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        >
          <ChevronRight size={18} className="text-gray-700" />
        </Button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images?.map((_, i) => (
            <Button
              variant="ghost"
              key={i}
              onClick={() => setMainImage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === mainImage ? "bg-primary" : "bg-white/60"}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images?.map((src, i) => (
          <Button
            variant="ghost"
            key={i}
            onClick={() => setMainImage(i)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors shrink-0 relative
                    ${i === mainImage ? "border-primary" : "border-transparent hover:border-primary/50"}`}
          >
            <Image
              src={resolveSanityUrl(src)}
              alt="Product Image"
              className="w-full h-full object-cover"
              fill
              sizes="80px"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
