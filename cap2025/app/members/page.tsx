'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function MembersPage() {
  return (
    <div className="p-4 pb-4 h-[calc(100vh-4rem)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full gap-4"
      >
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          className="min-w-[360px]"
        >
          <div className="h-full bg-[#f6f6f6] rounded-2xl p-4">
            Left Panel
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-4 bg-transparent" />
        <ResizablePanel defaultSize={50}>
          <div className="h-full bg-[#f6f6f6] rounded-2xl p-4">
            Middle Panel
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-4 bg-transparent" />
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          className="min-w-[360px]"
        >
          <div className="h-full bg-[#f6f6f6] rounded-2xl p-4">
            Right Panel
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
