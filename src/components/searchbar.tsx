import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchBar({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 bg-[#F2EFE9] rounded-full px-3 py-1.5 border border-transparent focus-within:border-[#C9A84C] transition-colors ${className}`}
    >
      <Search size={14} className="text-[#7A776F] shrink-0" />
      <Input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-none shadow-none focus-visible:ring-0 h-auto p-0 text-xs tracking-wider text-[#1C1B1A] placeholder:text-[#7A776F] w-28"
      />
    </div>
  );
}
