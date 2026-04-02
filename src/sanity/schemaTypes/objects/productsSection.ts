import { defineField, defineType } from "sanity";

export default defineType({
  name: "productsSection",
  title: "Products Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "viewAllLink",
      title: "View all",
      type: "link",
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (Rule) => Rule.max(4),
    }),
  ],
});
