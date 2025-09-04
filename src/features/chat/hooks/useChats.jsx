import { useEffect, useState } from "react";
import { getUserChats } from "../api/chat.repo";
import { getUser } from "@/features/auth/api/users.repo";

export const useChats = (userID) => {
    const [others, setOthers] = useState([]);

    useEffect(() => {
        if (!userID) return setOthers([]); 

        async function fetchData() {
            const chats = await getUserChats(userID);
            const otherIDs = chats.map(chat => 
                    chat.users.find(user => user !== userID) // chat.users = [userAID, userBID]
                ) 
                
            const users = await Promise.all(
                otherIDs.map((id) => getUser(id))
            );

            const byID = {};
            for (const user of users) {
                const key = user.id ?? user.uid ?? user.userID;
                byID[key] = user;
            }

            setOthers(otherIDs.map(id => byID[id]).filter(Boolean));
        }

        fetchData()

    }, [userID]);

    return others;
};