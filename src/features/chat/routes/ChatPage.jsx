import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const ChatPage = () => {
    const [chatSearch, setChatSearch] = useState("")
    const [activeChats, setActiveChats] = useState([])

    return (
        <div className="w-full h-full grid grid-cols-4">

            <div className="grid grid-rows-12 col-span-1 p-4 gap-2">
                {/* Search For Chats */}
                <Input className="row-span-1"></Input>
                {/* List of Active Chats */}
                <div className="row-span-11 flex flex-col gap-2">
                    <Card className="w-full h-10">HEY</Card>
                    <Card className="w-full h-10">HEY</Card>
                    <Card className="w-full h-10">HEY</Card>
                    <Card className="w-full h-10">HEY</Card>
                </div>
            </div>

            {/* Current Chat and Messages Inside */}
            <div className="grid grid-rows-12 col-span-3 p-4">
                <div className="bg-red-400 row-span-1"></div>
                <div className="flex flex-col row-span-11 bg-blue-400 p-4">
                    <div className="flex-grow"></div>
                    {/* Texting Input */}
                    <Input className="w-full row-span-1"></Input>
                </div>
            </div>
        </div>
    )
}

export default ChatPage