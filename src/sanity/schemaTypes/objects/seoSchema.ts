import { SearchIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "seoSchema",
  title: "JSON-LD Schema (Structured Data)",
  type: "object",
  icon: SearchIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [
    {
      name: "base",
      title: "Base Service Schema (Required)",
      description:
        "These fields are required for the Service schema to render.",
      options: { collapsible: false },
    },
    {
      name: "offers",
      title: "Offer Catalog (Conditional)",
      description: 'Renders "hasOfferCatalog" only if items are added.',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "faq",
      title: "FAQ Page (Conditional)",
      description: 'Renders "FAQPage" schema only if items are added.',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "serviceName",
      title: "Service Name",
      type: "string",
      fieldset: "base",
      placeholder: "[Required to Populate]",
    }),
    defineField({
      name: "serviceDescription",
      title: "Service Description",
      type: "text",
      rows: 3,
      fieldset: "base",
      placeholder: "[Required to Populate]",
    }),
    defineField({
      name: "serviceType",
      title: "Service Type",
      description: 'e.g., "IT Consulting", "Web Development"',
      type: "string",
      fieldset: "base",
      placeholder: "[Required to Populate]",
    }),
    defineField({
      name: "areaServed",
      title: "Area Served",
      description: 'e.g., "Global", "United States", "New York"',
      type: "string",
      fieldset: "base",
      placeholder: "[Required to Populate]",
      initialValue: "Global",
    }),

    defineField({
      name: "offerCatalogName",
      title: "Offer Catalog Name",
      description: 'Defaults to "Service Name" if left empty.',
      type: "string",
      fieldset: "offers",
    }),
    defineField({
      name: "offers",
      title: "Offers List",
      type: "array",
      fieldset: "offers",
      of: [
        {
          type: "object",
          title: "Offer",
          fields: [
            defineField({
              name: "name",
              title: "Offer Service Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Offer Service Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      fieldset: "faq",
      of: [
        {
          type: "object",
          title: "Question",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "jsonLdPageLevelOverride",
      title: "JSON-LD Override (Advanced)",
      type: "text",
      rows: 10,
      description:
        "CAUTION: Only use this to completely overwrite the auto-generated schema.",
      validation: (rule) =>
        rule.custom((value) => {
          if (value) {
            try {
              JSON.parse(value);
            } catch {
              return "Invalid JSON format";
            }
          }
          return true;
        }),
    }),
  ],
});
