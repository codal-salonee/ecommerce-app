import { defineQuery } from "next-sanity";
import { FRAGMENT_LINK, FRAGMENT_PAGE_DETAILS } from "./fragments";

export const HomePageQuery = defineQuery(`
  *[_type == "homepage"][0]{
    _id,
    ${FRAGMENT_PAGE_DETAILS}
    // TODO: Add seo and schema
  }
`);

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

const FILTER_FRAGMENT = `$filter == "" || 
    ($filter == "price_above_200" && price > 200) || 
    ($filter == "price_below_200" && price < 200) || 
    ($filter == "out_of_stock" && isOutOfStock == true) || 
    ($filter == "in_stock" && isOutOfStock == false)`;

export const PRODUCT_LIST_QUERY = `
 *[_type == "product" && $categorySlug in productCategory[]->slug.current && (
    ${FILTER_FRAGMENT}
  )]
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
  "totalProducts": count(*[_type == "product" && $categorySlug in productCategory[]->slug.current && (
   ${FILTER_FRAGMENT}
  )]),
  "category": *[_type == "category" && slug.current == $categorySlug][0]{
    name,
    slug,
    headerContent,
    footerContent,
  }
}`);

export const PRODUCT_DETAIL_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $productSlug][0]{
    ...,
    productCategory[]->{
      name,
      slug
    }
  }`,
);
