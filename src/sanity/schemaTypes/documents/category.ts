import { RobotIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  type: "document",
  title: "Category",
  icon: RobotIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerContent",
      type: "text",
      title: "Header content",
      rows: 3,
      description:
        "Content which will appear before product listing (max 160 chars).",
      validation: (Rule) =>
        Rule.max(160).warning("Longer descriptions may be truncated."),
    }),
    defineField({
      name: "footerContent",
      type: "text",
      title: "Footer content",
      rows: 3,
      description:
        "Content which will appear after product listing (max 160 chars).",
      validation: (Rule) =>
        Rule.max(160).warning("Longer descriptions may be truncated."),
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Icon (SVG)",
      options: {
        accept: ".svg",
      },
    }),
    defineField({
      name: "seo",
      type: "seo",
      title: "SEO",
    }),
  ],
});
