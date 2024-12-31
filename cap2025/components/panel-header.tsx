'use client';

import { Button } from "@/components/ui/button";
import { SidebarIcon } from "@/components/icons";

interface PanelHeaderProps {
  onSidebarClick?: () => void;
}

export function PanelHeader({ onSidebarClick }: PanelHeaderProps) {
  return (
    <div className="h-12 px-4 border-b border-[#ebeef4] justify-end items-center flex bg-[#f6f6f6] relative z-10 rounded-t-2xl">
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
