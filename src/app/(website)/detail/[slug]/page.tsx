import ImageSlider from "@/components/image-slider";
import { RichTextBlock } from "@/components/sanity/rich-text-block";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PRODUCT_DETAIL_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { ShoppingCart } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: productSlug } = await params;
  const { data: productData } = await sanityFetch({
    query: PRODUCT_DETAIL_QUERY,
    params: {
      productSlug,
    },
  });

  return (
    <Section>
      <>
        {/* Breadcrumb */}
        <p className="text-xs text-gray-400 tracking-wide mb-6">
          <Link href="/">Home</Link>&nbsp;/&nbsp;
          <Link href={`/${productData?.productCategory[0].slug.current}`}>
            {productData?.productCategory[0].name}
          </Link>
          &nbsp;/&nbsp;
          <span className="text-gray-600">{productData?.name}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ImageSlider images={productData?.images} />

          {/* ── Right: Info ──────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-gray-900 leading-snug">
              {productData?.name}
            </h1>

            <p className="text-3xl font-bold text-gray-900">
              AED {productData?.price}
            </p>

            <Separator className="bg-gray-100" />

            {/* Add to Cart */}
            <Button
              className={`w-full h-14 text-base font-semibold rounded-xl tracking-wide transition-all duration-300 gap-2 bg-[#7B2D6E] hover:bg-[#6a2460]`}
            >
              <ShoppingCart size={20} strokeWidth={2} /> Add to Cart
            </Button>

            {/* Description */}

            {productData?.description && (
              <PortableText
                value={productData?.description}
                components={RichTextBlock}
              />
            )}
          </div>
        </div>
      </>
    </Section>
  );
}
