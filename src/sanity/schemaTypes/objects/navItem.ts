import { FolderIcon, LinkIcon } from "@sanity/icons";
import {
  type ConditionalPropertyCallbackContext,
  defineField,
  defineType,
} from "sanity";

import { LinkFields } from "@/sanity/lib/fields";

export default defineType({
  name: "navItem",
  title: "Navigation Section",
  type: "object",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "type",
      title: "Item Type",
      type: "string",
      initialValue: "dropdown",
      options: {
        list: [
          { title: "Dropdown Menu", value: "dropdown" },
          { title: "Direct Link", value: "link" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "label",
      title: "Label",
      description: "The text displayed in the menu.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    ...LinkFields.map((field) =>
      defineField({
        ...field,
        hidden: (context: ConditionalPropertyCallbackContext) => {
          const parent = context.parent as { type?: string } | undefined;

          if (parent?.type !== "link") {
            return true;
          }

          if (typeof field.hidden === "function") {
            return field.hidden(context);
          }

          return typeof field.hidden === "boolean" ? field.hidden : false;
        },
      }),
    ),
    defineField({
      name: "children",
      title: "Dropdown Links",
      type: "array",
      of: [{ type: "link" }],
      hidden: ({ parent }) =>
        (parent as { type?: string })?.type !== "dropdown",
      validation: (Rule) =>
        Rule.max(10).custom((children, context) => {
          const parent = context.parent as { type?: string } | undefined;
          if (
            parent?.type === "dropdown" &&
            (!children || children.length === 0)
          ) {
            return "A dropdown must have at least one link.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      label: "label",
      type: "type",
      linkType: "linkType",
      externalUrl: "externalUrl",
      internalTitle: "internalLink.editorTitle",
    },
    prepare(selection) {
      const { label, type, linkType, externalUrl, internalTitle } = selection;

      const isLink = type === "link";
      let subtitle = "Dropdown Menu";

      if (isLink) {
        if (linkType === "internal") {
          subtitle = internalTitle
            ? `Internal: ${internalTitle}`
            : "Internal Link";
        } else {
          subtitle = externalUrl ? `External: ${externalUrl}` : "External Link";
        }
      }

      return {
        title: label || "Untitled",
        subtitle: subtitle,
        media: isLink ? LinkIcon : FolderIcon,
      };
    },
  },
});
