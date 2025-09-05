import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/app/contexts/AuthContext"
import {useChats} from "../hooks/useChats"
import ChatCard from './ChatCard'
import { useState } from "react"
import FindUsers from "../components/FindUsers"
import { Toggle } from "@/components/ui/toggle"
import { createChat, sendMessage } from "../api/chat.repo"
import { Button } from "@/components/ui/button"

const Chat = () => {
    // TODO: Break down into smaller components {chats, active chat messages...}

    const [searchVisible, setSearchVisible] = useState(false)
    const [activeChatID, setActiveChatID] = useState("")
    const [message, setMessage] = useState("")

    // get current user
    const { currentUser } = useAuth()
    const userID = currentUser.uid

    // get all chats
    const chats = useChats(userID) 

    const handleUserClick = (other) => {
        createChat(userID, other.id)
        setSearchVisible(!searchVisible)
    }
 
    const handleChatClick = (chat) => {
        setActiveChatID(chat.id)
        console.log(activeChatID)
    }

    // create message in active chat
    const handleSendMessage = () => {
        if (!activeChatID || !message) {
            console.log("No active chat or message")
            return
        }

        sendMessage(activeChatID, userID, message)
        console.log("SENDING MESSAGE")
        setMessage("")
    }

    // get all messages from active chat



    
    return (
        <div className="flex w-full aspect-video border">
            {searchVisible ? <FindUsers handleUserClick={handleUserClick} currentUserID={userID}/> : null}
            <div className="flex w-1/4 min-w-0 flex-col gap-2 p-4 overflow-hidden">
                {/* Search For Chats */}
                <Input className="p-4 flex flex-col w-full"></Input>
                {/* List of Active Chats */}

                <ScrollArea className="flex-1 w-full min-h-0">
                    <div className="flex flex-col gap-2">
                        {chats.map((chat) => 
                            <ChatCard 
                                key={chat.id} 
                                chat={chat}
                                currentUserID={userID}
                                onClick={handleChatClick}
                            /> 
                        )}
                    </div>
                </ScrollArea>

                <Toggle className="cursor-pointer border" onClick={() => setSearchVisible(!searchVisible)}>New Chat</Toggle>
                </div>
                <Separator orientation="vertical"/>
                {/* Current Chat and Messages Inside */}
            <div className="w-[75%] h-full p-4 flex flex-col">
                <div className="h-[90%]">
                    <h2>activeChat.displayName</h2>
                    <Separator/>
                </div>
                <div className="flex flex-col p-4 h-[10%]">
                    <div className="flex gap-2">
                        <Input className="w-full row-span-1" value={message} onChange={(event) => (setMessage(event.target.value))}></Input>
                        <Button className="w-[12%]" onClick={handleSendMessage}>Send</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Chat