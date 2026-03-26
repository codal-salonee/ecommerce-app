import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FOOTER_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";

export default async function Footer() {
  const { data } = await sanityFetch({
    query: FOOTER_QUERY,
  });

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Link
            href="/"
            className="font-serif font-semibold text-[1.75rem] tracking-[0.08em] text-white no-underline"
          >
            GIFTS<span className="text-primary">·</span>CO
          </Link>
          <p className="text-sm leading-relaxed text-primary max-w-xs">
            {data?.statement1}
          </p>

          {/* Newsletter */}
          <div className="mt-2">
            <p className="text-[0.7rem] tracking-widest uppercase text-primary mb-3">
              Subscribe to our newsletter
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-[#2A2927] border-[#3a3835] text-white placeholder:text-foreground text-sm h-9 rounded-none"
              />
              <Button className="bg-primary hover:bg-primary/10 text-white text-xs tracking-widest uppercase rounded-none h-9 px-4 shrink-0">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {data?.navigation?.map(({ label, children }) => (
          <div key={label} className="flex flex-col gap-4">
            <h4 className="text-[0.7rem] tracking-widest uppercase text-white font-medium">
              {label}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {(children || []).map(({ label, internalLink, externalUrl }) => (
                <li key={label}>
                  <Link
                    href={
                      externalUrl
                        ? externalUrl
                        : (internalLink?.slug.current ?? "/")
                    }
                    className="text-sm text-background/80 hover:text-primary transition-colors duration-200 no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className="bg-primary" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.7rem] tracking-wider text-primary uppercase">
          {data?.statement2}
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[0.7rem] tracking-wider uppercase text-background/80 hover:text-primary transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
