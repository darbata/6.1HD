import { useEffect, useState } from "react";
import { subUserChats } from "../api/chat.repo"

const useActiveChats = (userID) => {
    const [chats, setChats] = useState([])
    useEffect(() => {
        if (!userID) return;
        return subYserChats(userID, setChats)
    }, [userID])
    return chats;
}