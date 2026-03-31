import { BasketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Product name",
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
      name: "productCategory",
      type: "array",
      title: "Category",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isOutOfStock",
      type: "boolean",
      title: "Is Out Of Stock",
      initialValue: false,
      validation: (Rule) => Rule.required(),
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
      categoryType: "productCategory",
      images: "images",
    },
    prepare({ title, categoryType, images }) {
      return {
        title,
        Category: categoryType,
        media: images?.[0] ?? BasketIcon,
      };
    },
  },
});
