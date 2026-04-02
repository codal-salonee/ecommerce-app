import { PresentationIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "banners",
  title: "Banners",
  type: "object",
  fields: [
    defineField({
      name: "banner",
      title: "Banner",
      type: "array",
      of: [
        {
          type: "object",
          title: "Banner",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              validation: (Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      media: "banner.0.image",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: "Banners",
        media: media ?? PresentationIcon,
      };
    },
  },
});
