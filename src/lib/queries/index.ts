import { defineQuery } from "next-sanity";

export const FRAGMENT_LINK = `
  label,
  linkType,
  internalLink->{ slug { current } },
  externalUrl
`;

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

export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0] {
    statement1,
    statement2,
    navigation[] {
      ...,
      children[] {
        ...,
        ${FRAGMENT_LINK}
      },
      ${FRAGMENT_LINK}
    },
  }
`);
