import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SanityLive } from "@/sanity/lib/live";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SanityLive />
    </>
  );
}
