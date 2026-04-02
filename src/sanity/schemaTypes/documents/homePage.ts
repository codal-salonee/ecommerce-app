import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "content", title: "Content" },
    { name: "seo", title: "SEO & Metadata" },
  ],
  fields: [
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "pageBuilder",
      group: "content",
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),

    defineField({
      name: "seoSchema",
      title: "Structured Data (JSON-LD)",
      type: "seoSchema",
      group: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
