import { CATEGORIES_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import Actions from "./actions";
import AnnouncementBar from "./announcement-bar";
import NavBar from "./nav-bar";

export default async function Header() {
  const { data } = await sanityFetch({
    query: CATEGORIES_QUERY,
  });

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <header className="bg-background border-b border-foreground shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 font-serif font-semibold text-[1.75rem] tracking-[0.08em] text-foreground no-underline"
          >
            GIFTS<span className="text-primary">·</span>CO
          </Link>

          {/* Right Actions */}
          <Actions categoryList={data} />
        </div>
        {/* Desktop Nav - Centered */}
        <div className="grow flex justify-center bg-foreground">
          <NavBar categoryList={data} />
        </div>
      </header>
    </>
  );
}
