import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import { LinkFields } from "@/sanity/lib/fields";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),

    ...LinkFields,
  ],

  preview: {
    select: {
      label: "label",
      linkType: "linkType",
      externalUrl: "externalUrl",
      internalTitle: "internalLink.editorTitle",
      internalLink: "internalLink.slug",
    },
    prepare(selection) {
      const { label, linkType, externalUrl, internalTitle, internalLink } =
        selection;

      const target =
        linkType === "internal"
          ? `${internalTitle} (${internalLink?.current || "#"})`
          : externalUrl;
      const subtitle =
        linkType === "internal"
          ? `Internal: ${target || "No page selected"}`
          : `External: ${target}`;

      return {
        title: label || target || "No Link Label",
        subtitle: subtitle,
        media: LinkIcon,
      };
    },
  },
});
