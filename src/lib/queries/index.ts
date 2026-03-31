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

export const PRODUCT_LIST_QUERY = `
 *[_type == "product" && $categorySlug in productCategory[]->slug.current]
    | order(_createdAt desc)[$start...$end]{
      _id,
      name,
      slug,
      price,
      images,
    }
`;

export const PRODUCT_LISTING_QUERY = defineQuery(`{
  "products": ${PRODUCT_LIST_QUERY},
  "totalProducts": count(*[_type == "product" && $categorySlug in productCategory[]->slug.current]),
  "category": *[_type == "category" && slug.current == $categorySlug][0]{
    name,
    slug,
    headerContent,
    footerContent,
  }
}`);
