import { db } from "@/services/firebase"
import { onSnapshot, doc } from "firebase/firestore"
import { createContext, useEffect, useState, useContext } from "react"
import { useAuth } from "./AuthContext"

const SubscriptionContext = createContext(null)

export const SubscriptionProvider = ({ children }) => {
    // this is used to actually check if a user is subscribed or not
    // let components know

    const auth = useAuth()
    const currentUser = auth.currentUser

    const [sub, setSub] = useState(null)

    useEffect(() => {
        if (!auth) {
            setSub({ isSubscribed: false, status: null })
            return
        }

        // TODO: SIMPLIFY THIS
        const ref = doc(db, "users", currentUser.uid)
        const unsub = onSnapshot(ref, snap => {
            const data = snap.data()
            setSub({
                isSubscribed: data?.isPremium == "", 
                status: data?.subscription?.status
            })
        })

        return unsub

    }, [auth?.uid])

    return (
        <SubscriptionContext.Provider value={sub}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export const useSubscription = () => useContext(SubContext)