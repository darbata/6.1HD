import { useEffect, useState } from "react";
import { listenToUserChats } from "../api/chat.repo";

export const useChats = (userID) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!userID) { setChats([]); return; }
    const unsub = listenToUserChats(userID, setChats, console.error);
    return unsub;
  }, [userID]);

  return chats;
};