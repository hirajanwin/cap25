'use client';

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PanelHeader } from "@/components/panel-header";

export default function MembersPage() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  return (
    <div className="h-[calc(100vh-4rem)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg"
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
          <div className="h-full bg-[#f6f6f6] rounded-l-lg">
            <PanelHeader 
              onSidebarClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
            />
            {!isLeftCollapsed && (
              <div className="p-4">Left Panel Content</div>
            )}
          </div>
        </ResizablePanel>
        
        <ResizableHandle className="w-4 bg-[#EBEEF4]" />
        
        {/* Middle Panel */}
        <ResizablePanel 
          defaultSize={50} 
          className="min-w-[200px]"
        >
          <div className="h-full bg-[#f6f6f6]">
            <div className="h-12 px-4 border-b border-[#ebeef4] flex items-center bg-[#f6f6f6]" />
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
          <div className="h-full bg-[#f6f6f6] rounded-r-lg">
            <PanelHeader 
              onSidebarClick={() => setIsRightCollapsed(!isRightCollapsed)}
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
