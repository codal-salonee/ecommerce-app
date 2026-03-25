import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
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
