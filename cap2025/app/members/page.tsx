'use client';

import { useState } from "react";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PanelHeader } from "@/components/panel-header";
import { SearchInput } from "@/components/ui/search-input";
import { Tabs } from "@/components/ui/tabs";
import { Tabs as TabsShadcn, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs-shadcn";
import { FilterIcon } from "@/components/icons/filter-icon";
import { Chat } from "@/components/ui/chat";
import { Snapshot } from "@/components/ui/snapshot";
import { Engagement } from "@/components/ui/engagement";
import { Glucose } from "@/components/ui/glucose";
import { EA1C } from "@/components/ui/ea1c";
import { Nutrition } from "@/components/ui/nutrition";
import { CarePlan } from "@/components/ui/care-plan";

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

const tabs = [
  { id: 'chat', label: 'Chat' },
  { id: 'sensor', label: 'Sensor' },
  { id: 'communication', label: 'Communication' },
  { id: 'care-plan', label: 'Care Plan' },
];

export default function MembersPage() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  const [selectedMemberFilter, setSelectedMemberFilter] = useState(memberFilters[0]);
  const [selectedThreadFilter, setSelectedThreadFilter] = useState(threadFilters[0]);
  const [selectedDetailFilter, setSelectedDetailFilter] = useState(detailFilters[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState('chat');

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
              className="flex-none"
            />
            {!isLeftCollapsed && (
              <>
                <div className="px-4 py-2 bg-white border-b border-[#ebeef4]">
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
          <div className="flex flex-col h-full bg-[#f6f6f6] rounded-2xl">
            <PanelHeader 
              showDropdown={true}
              dropdownItems={threadFilters}
              selectedItem={selectedThreadFilter}
              onDropdownSelect={setSelectedThreadFilter}
              onSidebarClick={undefined}
              className="flex-none"
            />
            <div className="bg-white border-b border-[#ebeef4]">
              <Tabs 
                tabs={tabs}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                onAddClick={() => console.log('Add clicked')}
              />
            </div>
            <div className="flex-1 min-h-0">
              {selectedTab === 'chat' && <Chat />}
              {selectedTab !== 'chat' && <div className="p-4">Middle Panel Content</div>}
            </div>
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
          <div className="flex flex-col h-full bg-[#f6f6f6] rounded-2xl">
            <PanelHeader 
              onSidebarClick={() => setIsRightCollapsed(!isRightCollapsed)}
              showDropdown={!isRightCollapsed}
              dropdownItems={detailFilters}
              selectedItem={selectedDetailFilter}
              onDropdownSelect={setSelectedDetailFilter}
              className="flex-none"
            />
            {!isRightCollapsed && (
              <div className="flex flex-col flex-1 min-h-0">
                <TabsShadcn defaultValue="primary" className="h-full flex flex-col">
                  <div className="h-14 flex-none px-4 py-1 bg-white justify-start items-center gap-4 inline-flex w-full border-b border-[#ebeef4]">
                    <div className="grow shrink basis-0">
                      <TabsList>
                        <TabsTrigger value="primary">Primary</TabsTrigger>
                        <TabsTrigger value="secondary">Secondary</TabsTrigger>
                      </TabsList>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f6f6f6] transition-colors">
                        <FilterIcon />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0">
                    <TabsContent value="primary" className="h-full">
                      <ScrollArea.Root className="h-full">
                        <ScrollArea.Viewport className="h-full w-full">
                          <div className="flex flex-col gap-3 p-4">
                            <Snapshot />
                            <Engagement />
                            <Glucose />
                            <EA1C />
                            <Nutrition />
                          </div>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar
                          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out hover:bg-transparent data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                          orientation="vertical"
                        >
                          <ScrollArea.Thumb className="flex-1 bg-gray-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] hover:bg-gray-400" />
                        </ScrollArea.Scrollbar>
                      </ScrollArea.Root>
                    </TabsContent>
                    <TabsContent value="secondary" className="h-full">
                      <ScrollArea.Root className="h-full">
                        <ScrollArea.Viewport className="h-full w-full">
                          <div className="p-4">
                            <CarePlan />
                          </div>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar
                          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out hover:bg-transparent data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                          orientation="vertical"
                        >
                          <ScrollArea.Thumb className="flex-1 bg-gray-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] hover:bg-gray-400" />
                        </ScrollArea.Scrollbar>
                      </ScrollArea.Root>
                    </TabsContent>
                  </div>
                </TabsShadcn>
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
