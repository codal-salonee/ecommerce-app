import { resolveSanityUrl } from "@/sanity/lib/image";
import type { HeroBanner as HeroBannerProps } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import Section from "./section";

export default function HeroBanner({
  leftBanner,
  rightBanner,
  isAboveTheFold,
}: HeroBannerProps & { isAboveTheFold: boolean }) {
  if (!leftBanner || !rightBanner) return null;
  const leftBannerImage = resolveSanityUrl(leftBanner.image);
  const rightBannerImage = resolveSanityUrl(rightBanner.image);

  return (
    <Section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        {leftBannerImage && (
          <Link href={`/${leftBanner.link.internalLink?.slug?.current}`}>
            <div className="group relative cursor-pointer w-full aspect-2/1 overflow-hidden">
              <Image
                src={leftBannerImage}
                alt={leftBanner.link.label || "Hero Banner"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                preload={isAboveTheFold}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Link>
        )}
        {rightBannerImage && (
          <Link href={`/${rightBanner.link.internalLink?.slug?.current}`}>
            <div className="group relative cursor-pointer w-full aspect-2/1 overflow-hidden">
              <Image
                src={rightBannerImage}
                alt={rightBanner.link.label || "Hero Banner"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                preload={isAboveTheFold}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Link>
        )}
      </div>
    </Section>
  );
}
