import { StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// IMPORTANT: Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAI.StreamingTextResponse.fromReadableStream(response.body)

  // Respond with the stream
  return stream
}
