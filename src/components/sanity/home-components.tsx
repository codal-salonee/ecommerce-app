/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";

const CategoryIconList = dynamic<any>(
  async () => import("@/components/category-icon-list"),
);
const ProductsSection = dynamic<any>(
  async () => import("@/components/products-section"),
);
const QuickDelivery = dynamic<any>(
  async () => import("@/components/quick-delivery"),
);
const Banners = dynamic<any>(async () => import("@/components/banners"));
const Testimonial = dynamic<any>(
  async () => import("@/components/testimonial"),
);
const Faqs = dynamic<any>(async () => import("@/components/faqs"));

const HeroBanner = dynamic<any>(async () => import("@/components/hero-banner"));

const HomeComponents = {
  heroBanner: HeroBanner,
  categoryIconList: CategoryIconList,
  productsSection: ProductsSection,
  quickDelivery: QuickDelivery,
  banners: Banners,
  testimonial: Testimonial,
  faqs: Faqs,
};

export default HomeComponents;
