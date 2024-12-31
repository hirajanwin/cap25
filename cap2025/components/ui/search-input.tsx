'use client';

import { SearchIcon } from "@/components/icons/search-icon";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({ 
  placeholder = "Search", 
  value, 
  onChange 
}: SearchInputProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="h-8 w-full rounded-full bg-white pl-10 pr-4 text-sm font-normal text-[#555a83] placeholder:text-[#667085] focus:outline-none focus:ring-1 focus:ring-[#206BDB]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
