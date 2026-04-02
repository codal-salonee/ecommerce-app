import { type SchemaTypeDefinition } from "sanity";
import category from "./documents/category";
import footer from "./documents/footer";
import homePage from "./documents/homePage";
import product from "./documents/product";
import banners from "./objects/banners";
import blockContent from "./objects/blockContent";
import categoryIconList from "./objects/categoryIconList";
import faqs from "./objects/faqs";
import heroBanner from "./objects/heroBanner";
import link from "./objects/link";
import navItem from "./objects/navItem";
import pageBuilder from "./objects/pageBuilder";
import productsSection from "./objects/productsSection";
import quickDelivery from "./objects/quickDelivery";
import seo from "./objects/seo";
import seoSchema from "./objects/seoSchema";
import testimonial from "./objects/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    homePage,
    category,
    footer,
    product,

    // objects
    pageBuilder,
    heroBanner,
    categoryIconList,
    productsSection,
    quickDelivery,
    banners,
    testimonial,
    faqs,
    blockContent,
    navItem,
    link,
    seo,
    seoSchema,
  ],
};
