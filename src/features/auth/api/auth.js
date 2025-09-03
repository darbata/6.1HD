import { auth } from '@/services/firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile,
    onAuthStateChanged 
} from "firebase/auth"

// thin layer to wrap up auth, and allow components to use functions
// current user update handled by UserContext

export const signup = async ({username, email, password, confirmPassword}) => {
    let creds
    try {
        creds = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(creds.user, {
            displayName: username
        })

    } catch (error) {
        throw error; // pass error up to UI
    }
    return creds.user;
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth)
}

export const listenAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback)
}