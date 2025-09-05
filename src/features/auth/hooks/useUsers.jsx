import { useEffect, useState } from "react"
import { getAllUsers } from "../api/users.repo"

export const useUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUsers()
            setUsers(data)
        }
        fetchData()

    }, [])
    return users
}