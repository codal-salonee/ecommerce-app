import { isDevelopment } from "@/lib/string";
import type { HomePageQueryResult } from "@/sanity/types";
import type { ElementType, ReactNode } from "react";
import { Fragment } from "react";

interface SanityPageProps {
  components: Record<string, ElementType>;
  data: HomePageQueryResult;
  params?: Promise<Record<"slug", string[]>>;
  searchParams?: Promise<Record<string, unknown>>;
}

type SanityPageType = (props: SanityPageProps) => ReactNode;

const SanityPage: SanityPageType = (props) => {
  const { components, data, params, searchParams } = props;

  const sections = data?.sections;

  return (
    <Fragment>
      {sections?.map((sectionData, index) => {
        if (!sectionData?._type) return null;

        const type = sectionData._type;
        const Component = components?.[type];

        if (!Component) {
          if (isDevelopment) {
            console.warn(
              `SanityPage: No component mapping found for type "${type}"`,
            );
          }
          return null;
        }

        return (
          <Component
            key={sectionData._key}
            {...sectionData}
            isAboveTheFold={index < 2}
            params={params}
            searchParams={searchParams}
          />
        );
      })}
    </Fragment>
  );
};

export default SanityPage;
