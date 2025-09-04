import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/app/contexts/AuthContext"
import {useChats} from "../hooks/useChats"
import ChatCard from './ChatCard'
import { useState } from "react"

const Chat = () => {
    const { currentUser } = useAuth()
    const userID = currentUser.uid
    const chatsWithOthers = useChats(userID)

    return (
        <div className="flex w-full aspect-video border">
            <div className="flex w-1/4 min-w-0 flex-col gap-2 p-4 overflow-hidden">
                {/* Search For Chats */}
                <Input className="p-4 flex flex-col w-full"></Input>
                {/* List of Active Chats */}

                <ScrollArea className="flex-1 w-full min-h-0">
                    <div className="flex flex-col gap-2">
                        {chatsWithOthers.map((other) => 
                            <ChatCard 
                                key={other.id} 
                                displayName={other.displayName} 
                                photoURL={other.photoURL} 
                                onClick={() => console.log("hello")} 
                            /> 
                        )}
                    </div>
                </ScrollArea>

                {/* <Button variant="secondary">New Chat</Button> */}
                </div>
                <Separator orientation="vertical"/>
                {/* Current Chat and Messages Inside */}

                <div className="w-[75%] h-full p-4 flex flex-col">
                    <div className="h-[90%]">
                        <h2></h2>
                        <Separator/>
                    </div>
                    <div className="flex flex-col p-4 h-[10%]">
                        <div className=""></div>
                        {/* Texting Input */}
                        <Input className="w-full row-span-1"></Input>
                </div>

            </div>
        </div>

    )
}

export default Chat