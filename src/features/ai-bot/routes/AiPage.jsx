import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/ui/chat-container"

import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message"

import {
    Markdown
} from "@/components/ui/markdown"

import Prompt from "../components/Prompt"
import useSubscription from "@/features/subscriptions/hooks/useSubscription"

const AiPage = () => {



  const [output, setOutput] = useState("")
  const [input, setInput] = useState("Hello")
  const [messages, setMessages] = useState([


  {
    "id": 1,
    "role": "user",
    "content": "Hello! Can you help me with a coding question?"
  },
  {
    "id": 2,
    "role": "assistant",
    "content": "Of course! I'd be happy to help with your coding question. What would you like to know?"
  },
  {
    "id": 3,
    "role": "user",
    "content": "How do I create a responsive layout with CSS Grid?"
  },
  {
    "id": 4,
    "role": "assistant",
    "content": "Creating a responsive layout with CSS Grid is straightforward. Here's a basic example:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a grid where:\n- Columns automatically fit as many as possible\n- Each column is at least 250px wide\n- Columns expand to fill available space\n- There's a 1rem gap between items\n\nWould you like me to explain more about how this works?"
  },
  {
    "id": 5,
    "role": "user",
    "content": "Yes, please explain how auto-fit and minmax work together."
  },
  {
    "id": 6,
    "role": "assistant",
    "content": "`auto-fit` tells the grid to create as many columns as will fit in the container. `minmax(250px, 1fr)` sets each column to be at least 250px wide, but able to grow to share the remaining space equally. Combined, this ensures items shrink into fewer columns on small screens and expand into more columns on larger screens."
  },
  {
    "id": 7,
    "role": "user",
    "content": "Got it. How can I center the items inside each grid cell?"
  },
  {
    "id": 8,
    "role": "assistant",
    "content": "You can use `place-items: center;` on the grid container:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  place-items: center;\n}\n```\n\nThis centers both horizontally and vertically. If you want only one axis, use `justify-items` or `align-items` instead."
  },
  {
    "id": 9,
    "role": "user",
    "content": "What if I want some items to span across two columns?"
  },
  {
    "id": 10,
    "role": "assistant",
    "content": "You can control that per item with the `grid-column` property. Example:\n\n```css\n.item-wide {\n  grid-column: span 2;\n}\n```\n\nThis makes the element take up two columns in the grid."
  },
  {
    "id": 11,
    "role": "user",
    "content": "Is there a way to make the layout switch to a single column on very small screens?"
  },
  {
    "id": 12,
    "role": "assistant",
    "content": "Yes. Use a media query to override the grid:\n\n```css\n@media (max-width: 500px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n}\n```\n\nThis forces all items into one column below 500px width."
  }
])

  const subscribed = useSubscription()

  if (!subscribed) {
    return <div className="text-4xl font-bold">Please subscribe to access this feature</div>
  }


    return (
        <section className="h-[800px] max-h-[800px] w-full flex flex-col border rounded">
            <ChatContainerRoot>
                <ChatContainerContent className="p-4 space-y-4">
                    {messages.map((message) => {
                        const isAssistant = message.role === "assistant"

                        return (
                            <Message
                                key={message.id}
                                className = {
                                    message.role === "user" ? "justify-end" : "justify-start"
                                }
                            >

                                {isAssistant && (
                                    <MessageAvatar 
                                        src="/avatara/ai.png"
                                        alt="AI Assistant"
                                        fallback="AI"
                                    />
                                )}

                                <div className="max-w-[85%] flex-1 sm:max-w-[75%]">
                                    {isAssistant ? (
                                        <div className="bg-secondary text-foreground prose rounded-lg p-2">
                                        <Markdown>{message.content}</Markdown>
                                        </div>
                                    ) : (
                                        <MessageContent className="bg-primary text-primary-foreground">
                                            {message.content}
                                        </MessageContent>
                                    )}
                                </div>

                            </Message>
                        )
                    })}
                </ChatContainerContent>
            </ChatContainerRoot>

            <div className="w-full p-4">
                <Prompt className="w-full" />
            </div>

        </section>
    )
}

export default AiPage