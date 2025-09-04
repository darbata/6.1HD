import { auth } from '@/services/firebase'
import { uploadPfpToBucket } from '@/services/bucket'
import { createUser } from './users.repo'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile,
    onAuthStateChanged 
} from "firebase/auth"

// thin layer to wrap up auth, and allow components to use functions
// current user update handled by UserContext

export const signup = async ({username, email, password, confirmPassword}, file) => {
    try {
        const creds = await createUserWithEmailAndPassword(auth, email, password)
        let photoURL
        if (file) {
            photoURL = await uploadPfpToBucket(file, creds.user.uid)
        } 
        await updateProfile(creds.user, {
            displayName: username,
            ...(photoURL ? {photoURL} : {})
        })
        await createUser(creds.user.uid, username, photoURL || null)
        return creds.user;
    } catch (error) {
        throw error; // pass error up to UI
    }
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