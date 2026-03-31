import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const resolveSanityUrl = (
  source?: SanityImageSource | string | null,
) => {
  if (!source) return null;
  return typeof source === "string"
    ? source
    : builder.image(source).auto("format").url();
};
