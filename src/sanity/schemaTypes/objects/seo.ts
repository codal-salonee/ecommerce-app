import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO Settings",
  type: "object",
  icon: TextIcon,
  groups: [
    { name: "meta", title: "Meta Tags" },
    { name: "social", title: "Social Sharing" },
    { name: "advanced", title: "Advanced / Robots" },
  ],
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "meta",
      description:
        "Title for browser tabs and Google search results (REC: < 60 chars).",
      validation: (Rule) =>
        Rule.max(60).warning("Titles longer than 60 chars may be truncated."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "meta",
      description:
        "Summary for search results. Encourages clicks (REC: < 160 chars).",
      validation: (Rule) =>
        Rule.max(160).warning("Longer descriptions may be truncated."),
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      group: "meta",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),

    defineField({
      name: "openGraph",
      title: "Open Graph (Facebook & LinkedIn)",
      type: "object",
      group: "social",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "ogTitle",
          title: "OG Title",
          type: "string",
          description:
            "Title for social media cards (ideally same or similar to Meta Title).",
          placeholder: "Defaults to Meta Title if empty",
        }),
        defineField({
          name: "ogDescription",
          title: "OG Description",
          type: "text",
          rows: 2,
          description:
            "Description for social shares. Should be catchy and engaging.",
          placeholder: "Defaults to Meta Description if empty",
        }),
        defineField({
          name: "ogImage",
          title: "OG Image",
          type: "image",
          description:
            "Image displayed when shared. Use 1200x630px for best results.",
        }),
        defineField({
          name: "ogType",
          title: "OG Type",
          type: "string",
          initialValue: "website",
          description:
            'Type of content for Open Graph. Usually "website" or "article".',
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Article", value: "article" },
              { title: "Profile", value: "profile" },
            ],
          },
        }),
      ],
    }),

    defineField({
      name: "twitterCard",
      title: "Twitter Card",
      type: "object",
      group: "social",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "tcTitle",
          title: "Twitter Title",
          type: "string",
          description:
            "Title shown in the Twitter card. Usually matches Meta or OG Title.",
        }),
        defineField({
          name: "tcDescription",
          title: "Twitter Description",
          type: "text",
          rows: 2,
          description: "Short description shown in the Twitter card.",
        }),
        defineField({
          name: "tcImage",
          title: "Twitter Image",
          type: "image",
          description: "Image for the Twitter card. Recommended: 1200x675px.",
        }),
        defineField({
          name: "tcCard",
          title: "Card Type",
          type: "string",
          description: "Choose a Twitter card layout.",
          options: {
            list: [
              { title: "Summary", value: "summary" },
              {
                title: "Summary with Large Image",
                value: "summary_large_image",
              },
              { title: "App", value: "app" },
              { title: "Player", value: "player" },
            ],
          },
        }),
      ],
    }),

    defineField({
      name: "robotsSettings",
      title: "Robots Settings",
      type: "object",
      group: "advanced",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "noIndex",
          title: "No Index",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "noFollow",
          title: "No Follow",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
  ],
});
