import { ReactNode } from 'react';
import { TaskCard } from './task-card';

interface MemberCardProps {
  name: string;
  id: string;
  lastMessage: string;
  lastMessageTime: string;
  tasks: Array<{
    title: string;
    time: string;
    items: string[];
  }>;
  onMessageClick?: () => void;
  onTaskComplete?: (taskIndex: number) => void;
  onTaskMoreClick?: (taskIndex: number) => void;
}

export function MemberCard({
  name,
  id,
  lastMessage,
  lastMessageTime,
  tasks,
  onMessageClick,
  onTaskComplete,
  onTaskMoreClick
}: MemberCardProps) {
  return (
    <div className="p-4 bg-white rounded-2xl flex flex-col gap-4">
      {/* Member Info */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-[#151336] text-base font-normal font-['Söhne'] leading-tight">
            {name}
          </div>
          <div className="text-[#555a83] text-sm font-medium font-['Söhne Mono'] leading-tight">
            {id}
          </div>
        </div>
        <button 
          onClick={onMessageClick}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <div className="text-[#206bdb] text-sm font-normal font-['Söhne'] leading-tight">
            {lastMessage}
          </div>
          <div className="text-[#6f6f6f] text-sm font-normal font-['Söhne'] leading-tight">
            {lastMessageTime}
          </div>
        </button>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-3">
        {tasks.slice(0, 4).map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            time={task.time}
            items={task.items}
            onComplete={() => onTaskComplete?.(index)}
            onMoreClick={() => onTaskMoreClick?.(index)}
          />
        ))}
      </div>
    </div>
  );
}
