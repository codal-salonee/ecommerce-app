import type { Testimonial as TestimonialProps } from "@/sanity/types";
import Section from "./section";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Testimonial({
  testimonials,
  title,
  viewAllReviews,
}: TestimonialProps) {
  return (
    <Section>
      <div className="flex justify-between my-2">
        <h2>{title}</h2>
        <Link href={`${viewAllReviews.externalUrl}`}>
          <Button>{viewAllReviews.label}</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
        {testimonials?.map((testimonial) => {
          return (
            <div
              key={testimonial._key}
              className="bg-primary rounded-2xl py-6 px-4 flex flex-col gap-3"
            >
              <p>{testimonial.author}</p>
              <p>Rating: {testimonial.review}</p>
              <p>{testimonial.details}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
