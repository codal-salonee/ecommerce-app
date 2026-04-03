import type { QuickDelivery as QuickDeliveryProps } from "@/sanity/types";
import Section from "./section";
import Image from "next/image";
import { resolveSanityUrl } from "@/sanity/lib/image";
import Link from "next/link";

export default function QuickDelivery({
  title,
  subtitle,
  deliveryText,
  banners,
}: QuickDeliveryProps) {
  return (
    <Section className="bg-primary rounded-2xl">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="text-center max-w-3xl flex flex-col gap-3 items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg italic font-semibold text-purple-600">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
          {banners?.map(({ image, title, link }) => {
            const imageUrl = resolveSanityUrl(image);
            return (
              <Link key={title} href={`/${link.internalLink?.slug?.current}`}>
                <div className="flex flex-col items-center gap-3 cursor-pointer group w-28 md:w-36">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={title || "Category banner"}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="33vw"
                      />
                    )}
                  </div>
                  <span className="text-sm text-gray-700 text-center leading-snug">
                    {title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center max-w-2xl flex flex-col gap-1.5 w-full">
          <p className="text-sm text-gray-500 leading-relaxed">
            {deliveryText}
          </p>
        </div>
      </div>
    </Section>
  );
}
