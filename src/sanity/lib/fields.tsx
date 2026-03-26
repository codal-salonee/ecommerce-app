import { defineField } from "sanity";

export const LinkFields = [
  defineField({
    name: "linkType",
    title: "Link Type",
    type: "string",
    initialValue: "internal",
    options: {
      list: [
        { title: "Internal Page", value: "internal" },
        { title: "External URL", value: "external" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
  }),
  defineField({
    name: "internalLink",
    title: "Select Page",
    type: "reference",
    to: [{ type: "category" }],
    hidden: ({ parent }) => parent?.linkType !== "internal",
    options: { disableNew: true },
  }),
  defineField({
    name: "externalUrl",
    title: "External URL",
    description:
      "Use full URLs (https://...), email links (mailto:...), or phone numbers (tel:...)",
    type: "url",
    hidden: ({ parent }) => parent?.linkType !== "external",
    validation: (Rule) =>
      Rule.uri({
        scheme: ["http", "https", "mailto", "tel"],
      }),
  }),
];
