import Link from "next/link";
import Section from "./section";

type Category = {
  name: string;
  slug: { current: string };
  _key: string;
};

type CategoryIconListProps = {
  categories: Category[] | null | undefined;
};

export default function CategoryIconList({
  categories,
}: CategoryIconListProps) {
  return (
    <Section>
      <div className="flex justify-between">
        {categories?.map((category) => (
          <Link key={category.name} href={`/category/${category.slug.current}`}>
            <div className="h-20 w-20 bg-primary flex items-center justify-center rounded-full">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
