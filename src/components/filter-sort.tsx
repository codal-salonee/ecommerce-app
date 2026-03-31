"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];
// const FILTER_TAGS = ["All", "Women", "Men", "New", "Sale"];

export default function FilterSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort") ?? "newest";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(
      "sortOf",
      value === "newest" || value === "oldest" ? "_createdAt" : "price",
    );
    params.set(
      "sortBy",
      value === "newest" || value === "price_desc" ? "desc" : "asc",
    );
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e8e4df]">
        {/* Filter Tags */}
        {/* <div className="flex items-center gap-2 flex-wrap">
          <SlidersHorizontal size={14} className="text-[#7A776F] mr-1" />
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`text-[0.65rem] tracking-widest uppercase px-3 py-1.5 border transition-colors duration-200
                ${
                  activeFilter === tag
                    ? "bg-[#1C1B1A] text-white border-[#1C1B1A]"
                    : "bg-transparent text-[#7A776F] border-[#ddd9d4] hover:border-[#1C1B1A] hover:text-[#1C1B1A]"
                }`}
            >
              {tag}
            </button>
          ))}
        </div> */}

        {/* Sort */}
        <div className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-[#7A776F]">
          <span>Sort:</span>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-transparent focus:bg-transparent active:bg-transparent"
            >
              <Button
                variant="ghost"
                className="h-auto px-2 py-1.5 text-[0.65rem] tracking-widest uppercase text-[#1C1B1A] bg-transparent gap-1"
              >
                {sortBy} <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border-[#e8e4df] rounded-none shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              {SORT_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => handleSort(opt.value)}
                  className={`text-[0.7rem] tracking-wider uppercase cursor-pointer
                    ${sortBy === opt.value ? "text-primary" : "text-foreground"}`}
                >
                  {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
