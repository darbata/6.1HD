import { db } from "@/services/firebase";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";

export const createUser = async (uid, displayName, photoURL) => {
    const payload = {
        uid: uid,
        displayName: displayName.trim(),
        ...(photoURL ? {photoURL} : {})
    }
    await setDoc(doc(db, "users", uid), payload, {merge : true})
}

// get user
export const getUser = async (userID) => {
    const snap = await getDoc(doc(db, "users", userID))
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
}