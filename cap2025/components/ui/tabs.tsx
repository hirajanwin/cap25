'use client';

import { AddIcon } from "@/components/icons/add-icon";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (tabId: string) => void;
  onAddClick?: () => void;
}

export function Tabs({ 
  tabs, 
  selectedTab, 
  onTabChange,
  onAddClick 
}: TabsProps) {
  return (
    <div className="h-14 px-4 py-2 justify-between items-center inline-flex w-full">
      <div className="justify-center items-center gap-4 flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-3 py-2 rounded-3xl justify-start items-center gap-2 flex overflow-hidden ${
              selectedTab === tab.id ? 'bg-[#ccdefe]' : 'bg-white'
            }`}
          >
            <div className="justify-start items-center gap-3 flex">
              <div className={`text-base font-semibold font-['Inter'] leading-tight ${
                selectedTab === tab.id ? 'text-[#151336]' : 'text-[#555a83]'
              }`}>
                {tab.label}
              </div>
            </div>
          </button>
        ))}
      </div>
      {onAddClick && (
        <button 
          onClick={onAddClick}
          className="w-6 h-6 flex items-center justify-center hover:bg-[#f6f6f6] rounded-lg"
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
}
