import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { logout } from "@/features/auth/api/auth";
import { useAuth } from "@/app/contexts/AuthContext";

const ProfileCard = ({ displayName, photoURL }) => {
    const auth = useAuth()
    console.log(displayName, photoURL)
    return (
        <DropdownMenu viewport={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 justify-center cursor-pointer">
                    <Avatar className="border">
                        <AvatarImage src={photoURL} />
                        <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">{displayName}</h2>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer w-full" align="start" onClick={() => logout()}>SignOut</DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}

export default ProfileCard;