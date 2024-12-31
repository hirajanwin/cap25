import { CheckIcon } from "@/components/icons/check-icon";
import { MoreIcon } from "@/components/icons/more-icon";

interface TaskCardProps {
  title: string;
  time: string;
  items: string[];
  onComplete?: () => void;
  onMoreClick?: () => void;
}

export function TaskCard({ 
  title, 
  time, 
  items,
  onComplete,
  onMoreClick 
}: TaskCardProps) {
  return (
    <div className="h-28 px-4 py-2 bg-white rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="grow shrink basis-0 text-[#151336] text-base font-normal font-['Söhne'] leading-tight">
          {title}
        </div>
        <div className="text-[#6f6f6f] text-sm font-normal font-['Söhne'] leading-tight">
          {time}
        </div>
      </div>
      
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="grow shrink basis-0 text-[#4c4c4c] text-sm font-normal font-['Söhne'] leading-tight">
          <ul className="list-disc pl-4 space-y-1">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="self-stretch justify-between items-center inline-flex">
        <button 
          onClick={onComplete}
          className="px-0.5 justify-center items-center gap-1 flex hover:opacity-80"
        >
          <div className="text-[#206bdb] text-sm font-semibold font-['Inter'] leading-tight">
            Mark complete
          </div>
          <div className="w-4 h-4 px-0.5 py-1 justify-center items-center flex overflow-hidden">
            <CheckIcon />
          </div>
        </button>
        
        <button 
          onClick={onMoreClick}
          className="w-6 h-6 justify-center items-center flex overflow-hidden hover:bg-[#f6f6f6] rounded-lg"
        >
          <MoreIcon />
        </button>
      </div>
    </div>
  );
}
