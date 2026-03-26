import { type SchemaTypeDefinition } from "sanity";
import category from "./documents/category";
import footer from "./documents/footer";
import navItem from "./objects/navItem";
import seo from "./objects/seo";
import link from "./objects/link";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    category,
    footer,

    // objects
    seo,
    navItem,
    link,
  ],
};
