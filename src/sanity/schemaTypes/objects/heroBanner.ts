import { PresentationIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroBanner",
  title: "Hero Banner",
  type: "object",
  fields: [
    defineField({
      name: "leftBanner",
      title: "Left side banner",
      type: "object",
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
    }),
    defineField({
      name: "rightBanner",
      title: "Right side banner",
      type: "object",
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
    }),
  ],
  preview: {
    select: {
      media: "leftBanner.image",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: "Hero Banners",
        media: media ?? PresentationIcon,
      };
    },
  },
});
