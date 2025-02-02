'use client';

import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CheckIcon, MoreHorizontalIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  memberName: string;
  memberId: string;
  title: string;
  timeAgo: string;
  description: string[];
  onMarkComplete?: () => void;
  onReject?: () => void;
  onSkip?: () => void;
  onReassign?: () => void;
  defaultSelected?: boolean;
  onClick?: () => void;
}

export function TaskCard({
  memberName,
  memberId,
  title,
  timeAgo,
  description,
  onMarkComplete,
  onReject,
  onSkip,
  onReassign,
  defaultSelected = false,
  onClick,
}: TaskCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger click if clicking on interactive elements
    if (
      (e.target as HTMLElement).closest('button') ||
      (e.target as HTMLElement).closest('[role="menuitem"]')
    ) {
      return;
    }
    onClick?.();
  };

  return (
    <div 
      className={cn(
        "h-fit p-4 rounded-2xl flex-col justify-start items-start gap-2 inline-flex w-full cursor-pointer",
        defaultSelected ? "bg-[#ccdefe]" : "bg-white"
      )}
      onClick={handleCardClick}
    >
      <div className="flex items-baseline justify-between w-full">
        <div className={cn(
          "text-base font-semibold font-inter leading-tight",
          defaultSelected ? "text-[#151336]" : "text-[#555a83]"
        )}>
          {memberName}
        </div>
        <div className="text-[#475466] text-xs font-medium font-['SöhneMono'] leading-tight">
          {memberId}
        </div>
      </div>

      <div className={cn(
        "self-stretch px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 flex",
        defaultSelected ? "bg-white" : "bg-[#f6f6f6]"
      )}>
        <div className="self-stretch justify-start items-center inline-flex">
          <div className="grow shrink basis-0 text-[#151336] text-base font-normal font-['Söhne'] leading-tight">
            {title}
          </div>
          <div className="text-[#6f6f6f] text-sm font-normal font-['Söhne'] leading-tight">
            {timeAgo}
          </div>
        </div>

        <div className="self-stretch">
          <ul className="list-disc pl-5 text-[#4c4c4c] text-sm font-normal font-['Söhne'] leading-tight">
            {description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="self-stretch justify-between items-center inline-flex">
          <button 
            onClick={onMarkComplete}
            className="px-0.5 justify-center items-center gap-1 flex hover:opacity-80 transition-opacity"
          >
            <div className={cn(
              "text-sm font-semibold font-inter leading-tight",
              defaultSelected ? "text-[#206bdb]" : "text-[#555a83]"
            )}>
              Mark complete
            </div>
            <div className="w-4 h-4 px-0.5 py-1 justify-center items-center flex overflow-hidden">
              <CheckIcon className={cn(
                "stroke-2",
                defaultSelected ? "stroke-[#206bdb]" : "stroke-[#555a83]"
              )} size={16} />
            </div>
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="justify-center items-center gap-2 flex overflow-hidden hover:opacity-80 transition-opacity">
                <MoreHorizontalIcon className={cn(
                  "w-6 h-6",
                  defaultSelected ? "text-[#206bdb]" : "text-[#555a83]"
                )} />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[160px] bg-white rounded-lg p-1 shadow-lg border border-gray-200"
                sideOffset={5}
              >
                <DropdownMenu.Item
                  className="text-[#555a83] text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-[#f6f6f6] rounded-md"
                  onSelect={onReject}
                >
                  Reject
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="text-[#555a83] text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-[#f6f6f6] rounded-md"
                  onSelect={onSkip}
                >
                  Skip
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="text-[#555a83] text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-[#f6f6f6] rounded-md"
                  onSelect={onReassign}
                >
                  Reassign
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
