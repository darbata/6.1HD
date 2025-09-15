import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useUsers } from "@/features/auth/hooks/useUsers"
import { ScrollArea } from "@/components/ui/scroll-area"
import UserCard from "./UserCard"

const FindUsers = ({currentUserID, handleUserClick}) => {
    const [search, setSearch] = useState("") // search via user.displayName

    const users = useUsers() // find all users and display them

    const filtered = users.filter(
        (user) => 
            user.id !== currentUserID &&
            user.displayName?.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div className="absolute top-1/5 left-1/2 -translate-x-1/2 z-40 w-[400px] h-auto aspect-[3/4] border p-4 flex flex-col gap-2 rounded">
            <Input value={search} onChange={(event) => setSearch(event.target.value)}></Input>
            <ScrollArea className="h-full w-full">
                <div>
                    {filtered.map((user) => <UserCard key={user.id} onClick={() => handleUserClick(user)} user={user} />)}
                </div>
            </ScrollArea>
        </div>
    )
}

export default FindUsers