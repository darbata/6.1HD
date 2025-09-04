import { createContext, useContext, useEffect, useState } from 'react'
import { listenAuthChange } from '@/features/auth/api/auth'

const AuthContext = createContext(null) // initial value

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => { // updates user if firebase notices a change
        const unsub = listenAuthChange((user) => {
            console.log(user)
            setCurrentUser(user)
            setLoading(false)
        })
        return unsub
    }, [])

    const value = {currentUser}

    return (
        <AuthContext.Provider value={value} >
            {/* confirm that the user is either logged in or logged out not awaiting firebase */}
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext