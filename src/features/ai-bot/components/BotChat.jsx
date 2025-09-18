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
import { useAiChat } from "../hooks/useAiChat"

const BotChat = () => {
  const messages = useAiChat().messages

  return (
    <ChatContainerRoot className="h-full flex flex-col min-h-0">
      <ChatContainerContent className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isAssistant = message.role === "model"
          return (
            <Message
              key={message.id}
              className={message.role === "user" ? "justify-end" : "justify-start"}
            >
              {isAssistant && (
                <MessageAvatar src="/avatar/ai.png" alt="AI Assistant" fallback="AI" />
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] ${
                  message.role === "user" ? "flex justify-end" : "flex justify-start"
                }`}
              >
                {isAssistant ? (
                  <div className="bg-secondary inline-block text-foreground prose rounded-lg p-2">
                    <Markdown>{message.text}</Markdown>
                  </div>
                ) : (
                  <MessageContent className="bg-primary inline-block text-primary-foreground">
                    {message.text}
                  </MessageContent>
                )}
              </div>
            </Message>
          )
        })}
      </ChatContainerContent>
    </ChatContainerRoot>
  )
}

export default BotChat