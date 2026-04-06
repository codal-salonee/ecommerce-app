"use client";

import { useState } from "react";
import type { Faqs as FaqsProps } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { RichTextBlock } from "./sanity/rich-text-block";
import Section from "./section";
import { Button } from "./ui/button";

export default function Faqs({ questions, description }: FaqsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section>
      <div>
        {description && (
          <div className="mb-6">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-none" : "max-h-41"
              }`}
            >
              <PortableText value={description} components={RichTextBlock} />
            </div>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="ghost"
              className="mt-3 p-0 underline hover:bg-transparent font-bold"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          </div>
        )}
        {questions?.map((question, index) => {
          return (
            <div key={index} className="flex flex-col py-4 gap-1">
              <p className="font-semibold">{question.question}</p>
              <p>{question.answer}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
