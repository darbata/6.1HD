// hooks/useAiChat.ts
import { useEffect, useState } from "react"
import { listenToAiChat } from "../api/gemini"
import { useAuth } from "@/app/contexts/AuthContext"

export function useAiChat() {
    const { currentUser } = useAuth()

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unsub = listenToAiChat( currentUser.uid,
            (messages) => {
                setMessages(messages)
            }
        )
        return () => unsub()
    }, [currentUser])

    return { messages }
}