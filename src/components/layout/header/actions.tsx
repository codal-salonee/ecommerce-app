import SearchBar from "@/components/searchbar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";
import { Badge, Heart, Menu, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const cartCount = 3;

export default function Actions({
  categoryList,
}: {
  categoryList: CATEGORIES_QUERYResult;
}) {
  return (
    <div className="flex items-center gap-4">
      {/* Search */}
      <SearchBar className="hidden sm:flex" />

      <div className="hidden sm:block w-px h-7 bg-background" />

      {/* Wishlist */}
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:text-primary hover:bg-transparent"
        aria-label="Wishlist"
      >
        <Heart size={20} strokeWidth={1.6} />
      </Button>

      {/* Account */}
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:text-primary hover:bg-transparent"
        aria-label="Account"
      >
        <User size={20} strokeWidth={1.6} />
      </Button>

      {/* Cart */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-foreground hover:text-primary hover:bg-transparent"
        aria-label="Cart"
      >
        <ShoppingBag size={20} strokeWidth={1.6} />
        {cartCount > 0 && (
          <Badge className="absolute -top-1.5 -right-1.5 w-4 h-4 p-0 flex items-center justify-center bg-primary hover:bg-primary text-white text-[9px] rounded-full border-0 leading-none">
            {cartCount}
          </Badge>
        )}
      </Button>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Menu
            size={22}
            strokeWidth={1.8}
            className="md:hidden text-foreground hover:bg-transparent"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-background p-0 w-72">
          <div className="flex flex-col pt-10">
            {/* Mobile Search */}
            <div className="px-6 pb-4 border-b border-background">
              <SearchBar className="w-full" />
            </div>
            {/* Mobile Nav Links */}
            {categoryList.map(({ slug, name, children }) => (
              <Link
                key={slug}
                href={slug}
                className={`block px-6 py-4 text-[0.85rem] tracking-widest uppercase border-b border-background transition-colors hover:bg-background text-primary`}
              >
                {name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
