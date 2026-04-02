import { ComponentIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "categoryIconList",
  title: "Category Icon List",
  type: "object",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
  ],
  preview: {
    select: {
      media: "categories.0.image",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: "Category Icon List",
        media: media ?? ComponentIcon,
      };
    },
  },
});
