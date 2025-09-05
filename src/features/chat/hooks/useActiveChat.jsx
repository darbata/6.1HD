import { useEffect, useState } from "react";
import { getChat, getUserChats } from "../api/chat.repo";

export const useActiveChat = (chatID) => {
    const [activeChat, setActiveChat] = useState(null);

    useEffect(() => {
        if (!chatID) {
            setActiveChat(null)
            return
        }

        async function fetchData() {
            const chat = await getChat(chatID)
            setActiveChat(chat)
        }

        fetchData()
    }, [chatID]);

    return activeChat;
};