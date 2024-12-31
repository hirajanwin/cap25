'use client';

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PanelHeader } from "@/components/panel-header";
import { SearchInput } from "@/components/ui/search-input";

const memberFilters = [
  "All members",
  "D1-D10",
  "Hotlist",
  "Achievement",
  "No Chat",
  "PTO Coverage",
];

const threadFilters = [
  "Relevant threads",
  "Recent threads",
  "Adherence threads",
  "Custom threads",
  "Nutrition threads",
  "Treatment threads",
  "Lab threads",
];

const detailFilters = [
  "Relevant details",
  "Sensor details",
  "Nutrition details",
  "Treatment details",
  "Lab details",
  "Member details",
  "Program details",
];

export default function MembersPage() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  const [selectedMemberFilter, setSelectedMemberFilter] = useState(memberFilters[0]);
  const [selectedThreadFilter, setSelectedThreadFilter] = useState(threadFilters[0]);
  const [selectedDetailFilter, setSelectedDetailFilter] = useState(detailFilters[0]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-full px-4 pb-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full"
      >
        {/* Left Panel */}
        <ResizablePanel
          defaultSize={25}
          minSize={5}
          maxSize={30}
          className={`transition-all duration-300 ease-in-out ${
            isLeftCollapsed ? 'min-w-[56px] max-w-[56px]' : 'min-w-[360px] max-w-[360px]'
          }`}
        >
          <div className="h-full bg-[#f6f6f6] rounded-2xl">
            <PanelHeader 
              onSidebarClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
              showDropdown={!isLeftCollapsed}
              dropdownItems={memberFilters}
              selectedItem={selectedMemberFilter}
              onDropdownSelect={setSelectedMemberFilter}
            />
            {!isLeftCollapsed && (
              <>
                <div className="p-4 bg-white border-b border-[#ebeef4]">
                  <SearchInput 
                    placeholder="Search members"
                    value={searchQuery}
                    onChange={setSearchQuery}
                  />
                </div>
                <div className="p-4">
                  Left Panel Content
                </div>
              </>
            )}
          </div>
        </ResizablePanel>
        
        <ResizableHandle className="w-4 bg-[#EBEEF4]" />
        
        {/* Middle Panel */}
        <ResizablePanel 
          defaultSize={50} 
          className="min-w-[200px]"
        >
          <div className="h-full bg-[#f6f6f6] rounded-2xl">
            <PanelHeader 
              showDropdown={true}
              dropdownItems={threadFilters}
              selectedItem={selectedThreadFilter}
              onDropdownSelect={setSelectedThreadFilter}
            />
            <div className="p-4">Middle Panel Content</div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle className="w-4 bg-[#EBEEF4]" />
        
        {/* Right Panel */}
        <ResizablePanel
          defaultSize={25}
          minSize={5}
          maxSize={30}
          className={`transition-all duration-300 ease-in-out ${
            isRightCollapsed ? 'min-w-[56px] max-w-[56px]' : 'min-w-[360px] max-w-[360px]'
          }`}
        >
          <div className="h-full bg-[#f6f6f6] rounded-2xl">
            <PanelHeader 
              onSidebarClick={() => setIsRightCollapsed(!isRightCollapsed)}
              showDropdown={!isRightCollapsed}
              dropdownItems={detailFilters}
              selectedItem={selectedDetailFilter}
              onDropdownSelect={setSelectedDetailFilter}
            />
            {!isRightCollapsed && (
              <div className="p-4">Right Panel Content</div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
