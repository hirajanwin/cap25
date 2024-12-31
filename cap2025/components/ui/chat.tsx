'use client'

import { useChat } from 'ai/react'
import { Button } from './button'
import * as ScrollArea from '@radix-ui/react-scroll-area'

const sampleMessages = [
  { role: 'assistant', content: 'Hello! How can I help you today?' },
  { role: 'user', content: 'I need help with my health goals' },
  { role: 'assistant', content: 'I\'d be happy to help you with your health goals. Could you tell me more about what specific goals you\'d like to work on?' },
  { role: 'user', content: 'I want to improve my sleep quality' },
  { role: 'assistant', content: 'That\'s a great goal! To help you improve your sleep quality, I\'d recommend starting with these key areas:\n\n1. Consistent sleep schedule\n2. Relaxing bedtime routine\n3. Optimal sleep environment\n\nWhich of these would you like to focus on first?' }
]

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: sampleMessages
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 border rounded-lg bg-white overflow-hidden">
        <ScrollArea.Root className="h-full">
          <ScrollArea.Viewport className="h-full w-full">
            <div className="space-y-4 p-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    message.role === 'assistant' ? 'items-start' : 'items-end'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'assistant'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-1 last:mb-0">
                        {line}
                      </p>
                    ))}
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
      <form onSubmit={handleSubmit} className="mt-4 flex space-x-4">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <Button type="submit" className="px-6">Send</Button>
      </form>
    </div>
  )
}
