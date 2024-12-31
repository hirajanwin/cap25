'use client';

import { Button } from "@/components/ui/button";
import { SidebarIcon } from "@/components/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface PanelHeaderProps {
  onSidebarClick?: () => void;
  showDropdown?: boolean;
  dropdownItems?: string[];
  selectedItem?: string;
  onDropdownSelect?: (item: string) => void;
  className?: string;
}

export function PanelHeader({ 
  onSidebarClick,
  showDropdown,
  dropdownItems = [],
  selectedItem = "All members",
  onDropdownSelect,
  className
}: PanelHeaderProps) {
  return (
    <div className={cn(
      "h-12 px-4 border-b border-[#ebeef4] flex items-center justify-between bg-white rounded-t-2xl",
      className
    )}>
      {showDropdown && (
        <Select value={selectedItem} onValueChange={onDropdownSelect}>
          <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="All members" />
          </SelectTrigger>
          <SelectContent>
            {dropdownItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      {!showDropdown && <div />}
      <Button
        variant="ghost"
        size="icon"
        className="w-5 h-5 p-0 hover:bg-transparent"
        onClick={onSidebarClick}
      >
        <SidebarIcon className="h-5 w-5 text-[#555a83]" />
      </Button>
    </div>
  );
}
