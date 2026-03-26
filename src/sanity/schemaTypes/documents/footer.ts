import { LinkIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Global Footer",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "statement1",
      title: "Statement 1",
      description: "Example: Copyright Gifts.co 2026",
      type: "text",
    }),
    defineField({
      name: "statement2",
      title: "Statement 2",
      description: "Example: Part of the Gifts.co Group",
      type: "text",
    }),
    defineField({
      name: "navigation",
      title: "Footer Navigation Columns",
      description: "The column-based links displayed on the right side.",
      type: "array",
      of: [{ type: "navItem" }],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
