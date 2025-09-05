import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"
import UserCard from "./UserCard"


const ChatCard = ({chat, currentUserID, onClick}) => {
    const otherID = chat.userIDs.find((id) => id !== currentUserID)
    const otherUser = chat.users[otherID]
    return (
        <UserCard user={otherUser} onClick={() => onClick(chat)} />
    )
}

export default ChatCard