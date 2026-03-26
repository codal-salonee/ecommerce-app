import { defineQuery } from "next-sanity";

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && categoryType == "parent"] | order(name asc) {
    name,
    "slug": slug.current,
    "children": *[_type == "category" && categoryType == "child" && parent._ref == ^._id] | order(name asc) {
      name,
      "slug": slug.current
    }
  }
`);
