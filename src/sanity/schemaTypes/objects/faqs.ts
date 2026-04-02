import { HelpCircleIcon, HelpCircleIcon as QuestionIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqs",
  title: "FAQs",
  type: "object",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),

    defineField({
      name: "questions",
      title: "Questions List",
      type: "array",
      of: [
        {
          type: "object",
          icon: QuestionIcon,
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
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      questions: "questions",
    },
    prepare(selection) {
      const { title, questions } = selection;
      const count = questions ? questions.length : 0;

      return {
        title,
        subtitle: `Questions: ${count}`,
        media: HelpCircleIcon,
      };
    },
  },
});
