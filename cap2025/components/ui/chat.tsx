'use client'

import { useState } from 'react'
import { Button } from './button'
import { PlusIcon, CheckIcon, SendIcon } from 'lucide-react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

const sampleMessages = [
  {
    id: 1,
    role: 'assistant',
    content: "Welcome back! I noticed you've been consistently meeting your step goals this week. Great work! ",
    timestamp: '2024-12-31T14:30:00Z'
  },
  {
    id: 2,
    role: 'user',
    content: "Thanks! Yes, I've been trying to take more walks during my breaks.",
    timestamp: '2024-12-31T14:31:00Z'
  },
  {
    id: 3,
    role: 'assistant',
    content: "That's a great habit! I also see your blood glucose levels have been more stable during these walking days.",
    timestamp: '2024-12-31T14:32:00Z'
  },
  {
    id: 4,
    role: 'user',
    content: "Really? I hadn't noticed that connection.",
    timestamp: '2024-12-31T14:33:00Z'
  },
  {
    id: 5,
    role: 'assistant',
    content: "Yes! On days with 30+ minute walks, your post-meal glucose spikes are about 15% lower on average.",
    timestamp: '2024-12-31T14:34:00Z'
  },
  {
    id: 6,
    role: 'user',
    content: "That's really interesting! I'll try to keep this up.",
    timestamp: '2024-12-31T14:35:00Z'
  },
  {
    id: 7,
    role: 'assistant',
    content: "Would you like me to set a reminder for your daily walks? I can help you maintain this momentum.",
    timestamp: '2024-12-31T14:36:00Z'
  },
  {
    id: 8,
    role: 'user',
    content: "Yes, please! Maybe around 2 PM each day?",
    timestamp: '2024-12-31T14:37:00Z'
  },
  {
    id: 9,
    role: 'assistant',
    content: "Perfect! I've set a daily reminder for 2 PM. I'll also share a weekly summary of your walking impact on glucose levels.",
    timestamp: '2024-12-31T14:38:00Z'
  },
  {
    id: 10,
    role: 'user',
    content: "That would be very helpful, thank you!",
    timestamp: '2024-12-31T14:39:00Z'
  }
]

const sampleMessage = `Fantastic work on logging 76% of your breakfasts and making all of them green! That's a wonderful commitment to your health.

I noticed that we haven't gotten any data from your CGM in the past 5 days. I remember you were travellling and were going to put on a new CGM when you got home. Please make sure to do that as soon as possible so we can get you the most accurate recommednations.

You're doing an amazing job, and I'm here to support you every step of the way!`

export function Chat() {
  const [activeTab, setActiveTab] = useState<'suggested' | 'custom'>('suggested')
  const [input, setInput] = useState(sampleMessage)
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const [messages, setMessages] = useState(sampleMessages)

  const toggleChip = (chip: string) => {
    setSelectedChips(prev => 
      prev.includes(chip) 
        ? prev.filter(c => c !== chip)
        : [...prev, chip]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle submit logic
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area - Fills available space */}
      <div className="flex-1 min-h-0">
        <ScrollArea.Root className="h-full">
          <ScrollArea.Viewport className="h-full w-full">
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'assistant' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[80%] font-['Söhne'] text-base leading-[21px] font-normal ${
                      message.role === 'assistant'
                        ? 'bg-white text-[#101828] p-[8px_16px] rounded-[0px_8px_8px_8px] flex items-center gap-2'
                        : 'bg-[rgba(204,222,254,0.4)] text-[#101828] p-[10px_14px] rounded-[8px_8px_0px_8px] flex items-center gap-2'
                    }`}
                    style={{ fontFamily: 'Söhne' }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-gray-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>

      {/* Input Area - Fixed size */}
      <div className="flex-shrink-0 pt-2">
        {/* Tabs */}
        <div className="px-4 bg-[#f6f6f6] flex items-center gap-2">
          <button
            onClick={() => setActiveTab('suggested')}
            className={`px-4 py-2 rounded-3xl text-sm font-medium ${
              activeTab === 'suggested'
                ? 'bg-white border border-[#206bdb] text-[#373049]'
                : 'bg-white text-[#206bdb]'
            }`}
          >
            Suggested message
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-2 rounded-3xl text-sm font-medium ${
              activeTab === 'custom'
                ? 'bg-white border border-[#206bdb] text-[#373049]'
                : 'bg-white text-[#206bdb]'
            }`}
          >
            Custom
          </button>
        </div>

        {/* Chat Input Container */}
        <div className="p-4 pt-2 bg-[#f6f6f6] rounded-bl-2xl rounded-br-2xl">
          <div className="flex flex-col gap-2">
            {/* Text Area */}
            <div className="bg-white rounded-2xl border border-[#206bdb] p-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full min-h-[20px] resize-none text-base font-normal text-[#0f1728] focus:outline-none font-['Söhne']"
                style={{ height: 'auto', overflow: 'hidden' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_61_1933)">
                      <path d="M7.67151 3.18701C7.76157 3.18701 7.81509 3.12818 7.82922 3.04459C8.01544 1.99957 7.99834 1.95824 9.12109 1.75387C9.20582 1.73326 9.26355 1.68208 9.26355 1.59085C9.26355 1.50493 9.20469 1.44726 9.11997 1.43314C7.99834 1.24044 8.01427 1.19676 7.82922 0.143585C7.81509 0.0588336 7.76157 0 7.67151 0C7.58028 0 7.52792 0.0588336 7.5138 0.145918C7.33107 1.18743 7.34585 1.22877 6.22191 1.43314C6.13068 1.44843 6.0795 1.50493 6.0795 1.59085C6.0795 1.68208 6.13068 1.73326 6.22542 1.75387C7.34235 1.95124 7.32758 1.99491 7.5138 3.04342C7.52792 3.12818 7.58028 3.18701 7.67151 3.18701Z" fill="#0B5464"/>
                      <path d="M4.5296 7.71348C4.6632 7.71348 4.76026 7.61993 4.77556 7.49042C5.00532 5.77441 5.05548 5.76858 6.84265 5.43216C6.96563 5.41039 7.05803 5.31981 7.05803 5.1862C7.05803 5.05675 6.96446 4.95968 6.84031 4.94556C5.05897 4.69635 5.00001 4.64154 4.77556 2.89259C4.76026 2.75665 4.66437 2.66309 4.5296 2.66309C4.39897 2.66309 4.30307 2.75665 4.28364 2.90023C4.07746 4.61393 3.99193 4.61329 2.21654 4.94556C2.0924 4.96733 2 5.05675 2 5.1862C2 5.32745 2.0924 5.41039 2.24479 5.43216C4.00022 5.71027 4.07746 5.75912 4.28364 7.47748C4.30307 7.61993 4.39897 7.71348 4.5296 7.71348Z" fill="#AD2576"/>
                      <path d="M9.01015 14.8964C9.21013 14.8964 9.36009 14.7511 9.39598 14.5446C9.8607 11.0388 10.3537 10.5062 13.8109 10.1209C14.0238 10.098 14.1725 9.94041 14.1725 9.73399C14.1725 9.53521 14.0261 9.37882 13.812 9.35235C10.3561 8.95312 9.87702 8.43565 9.39598 4.92452C9.3577 4.71808 9.20894 4.57812 9.01015 4.57812C8.81137 4.57812 8.66142 4.71808 8.63086 4.92452C8.16499 8.43565 7.66775 8.96825 4.21482 9.35235C3.99659 9.37531 3.84899 9.53289 3.84899 9.73399C3.84899 9.93928 3.99543 10.0957 4.21365 10.1209C7.6601 10.581 8.12741 11.0388 8.63086 14.5446C8.66261 14.7511 8.81256 14.8964 9.01015 14.8964Z" fill="#206BDB"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_61_1933">
                        <rect width="12.1725" height="16" fill="white" transform="translate(2)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm text-[#344053]">Include</span>
                <div className="flex gap-2">
                  {['Hotlist', 'Achievement', 'D10'].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`flex flex-row items-center h-6 px-2 py-2 rounded-2xl gap-0.5 ${
                        selectedChips.includes(chip)
                          ? 'bg-[#CCDEFE]'
                          : 'bg-[#ebeef4] border border-[#ccdefe]'
                      }`}
                    >
                      <span className="text-sm font-medium text-[#373049] leading-none">
                        {chip}
                      </span>
                      {selectedChips.includes(chip) ? (
                        <CheckIcon className="w-4 h-4" />
                      ) : (
                        
                          <PlusIcon className="w-4 h-4" />
                        
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="px-3 py-1.5 bg-[#206bdb] rounded-3xl text-white flex items-center gap-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <span className="text-sm font-semibold">Send</span>
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
