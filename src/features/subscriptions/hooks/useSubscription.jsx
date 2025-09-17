import { useState, useEffect } from "react"
import { isUserSubscribed } from "../api/subscriptions.repo"
import { useAuth } from "@/app/contexts/AuthContext"

const useSubscription =  () => {
    const { currentUser } = useAuth()

    const [subscribed, setSubscribed] = useState(null)

    useEffect(() => {
        const check = async () => {
            if (!currentUser) {
                setSubscribed(false)
                return
            }

            const result = await isUserSubscribed(currentUser.uid)
            setSubscribed(result)
        }
        check()
    }, [currentUser])

    return subscribed
}

export default useSubscription

