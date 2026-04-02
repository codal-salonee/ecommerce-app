import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "quickDelivery",
  title: "Quick Delivery Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "banners",
      title: "Banner List",
      type: "array",
      of: [
        {
          type: "object",
          title: "Banner",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
            defineField({
              name: "link",
              type: "link",
              title: "Link",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "deliveryText",
      title: "Delivery text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: PackageIcon,
      };
    },
  },
});
