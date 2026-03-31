import { type SchemaTypeDefinition } from "sanity";
import category from "./documents/category";
import footer from "./documents/footer";
import product from "./documents/product";
import blockContent from "./objects/blockContent";
import link from "./objects/link";
import navItem from "./objects/navItem";
import seo from "./objects/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    category,
    footer,
    product,

    // objects
    blockContent,
    seo,
    navItem,
    link,
  ],
};
