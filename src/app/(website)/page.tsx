import HomeComponents from "@/components/sanity/home-components";
import SanityPage from "@/components/sanity/sanity-page";
import { HomePageQuery } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const { data } = await sanityFetch({
    query: HomePageQuery,
  });

  return <SanityPage components={HomeComponents} data={data} />;
}
