import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"


const ChatCard = ({displayName, photoURL, onClick}) => {
    return (
        <Card className="flex w-full h-12 items-center justify-center cursor-pointer" onClick={onClick}>
            <CardContent className="flex w-full gap-4 ">
                <Avatar className="border">
                    <AvatarImage src={photoURL} />
                    <AvatarFallback><User /></AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                    <h2 className="text-lg">{displayName}</h2>
                </div>
            </CardContent>
        </Card>
    )
}

export default ChatCard