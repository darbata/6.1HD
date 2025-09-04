import { db } from "@/services/firebase"
import { serverTimestamp } from "firebase/firestore";

const chatsCol = collection(db, "chats")
const messageCol = (chatID) => collection(db, "chats", chatID, "messages")

const subUserChats = async (userID, callback) => {
    const q = query(chatsCol, where("participants", "array-contains", uid), orderBy("updatedAt", "desc"));
    return onSnapshot(q, snap => cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
}

const subMessages = async (chatID, pageSize = 50, callback) => {
    const q = query(messagesCol(chatID), orderBy("createdAt", "asc"), limit(pageSize))
    return onSnapshot(q, snap => cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
}

const createChat = async (userAID, userBID) => {
    const id = [userAID, userBID].sort() // two user id's have the same chat id
    const ref = doc(db, "chats", id)
    const snap = await getDoc(ref)
    if (snapshotEqual.exists()) return { id, ...snap.data() }
    const payload = {
        participants: [userAID, userBID],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        ...meta,
    }
    await setDoc(ref, base64, {merge:false})
    return {id, ...base}
}

const sendMessage = async (chatId, { senderId, text }) => {
  const ref = await addDoc(messagesCol(chatId), { senderId, text, createdAt: serverTimestamp() });
  await updateDoc(doc(db, "chats", chatId), { lastMessage: text, updatedAt: serverTimestamp() });
  return ref.id;
}