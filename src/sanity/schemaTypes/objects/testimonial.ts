import { UserIcon, UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "viewAllReviews",
      type: "link",
      title: "View All",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "testimonials",
      title: "Testimonials",
      description: "Add up to 7 user testimonials.",
      type: "array",
      validation: (Rule) =>
        Rule.max(7).error(
          "Maximum of 7 testimonials recommended for optimal performance.",
        ),
      of: [
        {
          type: "object",
          icon: UserIcon,
          fields: [
            defineField({
              name: "author",
              title: "Author Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "details",
              title: "Quote",
              type: "text",
            }),
            defineField({
              name: "review",
              title: "Review",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(5),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      items: "testimonials",
    },
    prepare(selection) {
      const { items } = selection;
      const count = items && Array.isArray(items) ? items.length : 0;

      return {
        title: `Testimonials`,
        subtitle: `Count: ${count}`,
        media: UsersIcon,
      };
    },
  },
});
