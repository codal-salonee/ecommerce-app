import { type SchemaTypeDefinition } from "sanity";
import category from "./documents/category";
import seo from "./objects/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    category,

    // objects
    seo,
  ],
};
