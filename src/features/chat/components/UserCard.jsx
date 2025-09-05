import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"


const UserCard = ({ user, onClick }) => {
    return (
        <Card 
            className="flex w-full h-12 items-center justify-center cursor-pointer" 
            onClick={onClick}>
            <CardContent className="flex w-full gap-4 ">
                <Avatar className="border">
                    {user.photoURL ? 
                        <AvatarImage src={user.photoURL} /> : 
                        <AvatarFallback><User /></AvatarFallback>
                    }
                    
                </Avatar>
                <div className="flex items-center">
                    <h2 className="text-lg">{user.displayName}</h2>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserCard