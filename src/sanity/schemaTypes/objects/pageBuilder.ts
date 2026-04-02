import { ComponentIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const SHARED_SECTIONS = [
  { type: "heroBanner" },
  { type: "categoryIconList" },
  { type: "productsSection" },
  { type: "quickDelivery" },
  { type: "banners" },
  { type: "testimonial" },
  { type: "faqs" },
];

export default defineType({
  name: "pageBuilder",
  title: "Page Sections",
  type: "array",
  icon: ComponentIcon,
  of: SHARED_SECTIONS,
});
