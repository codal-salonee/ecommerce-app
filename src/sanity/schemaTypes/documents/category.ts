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

    // Radio to decide type
    defineField({
      name: "categoryType",
      type: "string",
      title: "Category Type",
      options: {
        list: [
          { title: "Parent", value: "parent" },
          { title: "Child", value: "child" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "child",
      validation: (Rule) => Rule.required(),
    }),
    // Shown only when categoryType === "child" — mandatory
    defineField({
      name: "parent",
      type: "reference",
      title: "Parent Category",
      to: [{ type: "category" }],
      hidden: ({ document }) => document?.categoryType !== "child",
      options: {
        // Only show documents that are parent type & not itself
        filter: ({ document }) => ({
          filter: 'categoryType == "parent" && _id != $id',
          params: { id: document._id },
        }),
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.categoryType === "child" && !value) {
            return "A child category must have a parent.";
          }
          return true;
        }),
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
  preview: {
    select: {
      title: "name",
      categoryType: "categoryType",
      parentName: "parent.name",
    },
    prepare({ title, categoryType, parentName }) {
      return {
        title,
        subtitle:
          categoryType === "child"
            ? `Child of: ${parentName ?? "⚠️ No parent set"}`
            : "Parent category",
      };
    },
  },
});
