import Link from "next/link";
import Section from "./section";
import Image from "next/image";
import type { Banners as BannersProps } from "@/sanity/types";
import { resolveSanityUrl } from "@/sanity/lib/image";

export default function Banners({ banner }: BannersProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        {banner?.map(({ image, link }, index) => {
          const imageUrl = resolveSanityUrl(image);
          if (!imageUrl) return null;
          return (
            <Link key={index} href={`/${link.internalLink?.slug?.current}`}>
              <div className="group relative overflow-hidden min-h-[38vh] cursor-pointer rounded-2xl">
                <Image
                  src={imageUrl}
                  alt="Banners"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
