import { getUser } from "@/features/auth/api/users.repo";
import { db } from "@/services/firebase"
import { serverTimestamp, collection, query, doc, getDoc, getDocs, where, setDoc, onSnapshot, orderBy } from "firebase/firestore";

const chatsCol = collection(db, "chats")
const messageCol = (chatID) => collection(db, "chats", chatID, "messages")

const chatID = (userAID, userBID) => [userAID, userBID].sort().join(":")

export const createChat = async (userAID, userBID) => {
    const id = chatID(userAID, userBID)

    // if id already exists dont create chat
    const ref = doc(db, "chats", id)
    const snap = await getDoc(ref)
    if (snap.exists()) return {id, ...snap.data()};

    // create a new one
    const userA = await getUser(userAID)
    const userB = await getUser(userBID)

    const payload = {
        userIDs: [userAID, userBID],
        users: {
            [userAID]: {
                displayName: userA.displayName,
                photoURL: userA.photoURL ?? null
            },
            [userBID]: {
                displayName: userB.displayName,
                photoURL: userB.photoURL ?? null
            }
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    }

    await setDoc(ref, payload)
    return {id, ...payload}
}

export function listenToUserChats(userID, onChange, onError) {
  if (!userID) return () => {};
  const q = query(
    chatsCol,
    where("userIDs", "array-contains", userID)
  );

  return onSnapshot(
    q,
    (snap) => {
      const chats = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      onChange(chats);
    },
    onError
  );
}

export const getUserChats = async (userID) => {
    const q = query(chatsCol, where("userIDs", "array-contains", userID))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({id: d.id, ...d.data()}))
}

export const getChat = async(chatID) => {
    const ref = doc(db, "chats", chatID)
    const snap = await getDoc(ref)
    return {id: snap.id, ...snap.data() }
}

export const getOtherUserID = async (userID, chatID) => {
    // chat doc has users[userAID, userBID]
    const ref = doc(db, "chats", chatID)
    const snap = await getDoc(ref)

    const [userIDA, userIDB] = snap.data().users

    // if I give user A ID as argument return user B ID and vice verse
    if (userID == userIDA) return userIDB
    if (userID == userIDB) return userIDA

}

// export const subUserChats = async (userID, callback) => {
//     const q = query(chatsCol, where("participants", "array-contains", uid), orderBy("updatedAt", "desc"));
//     return onSnapshot(q, snap => cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
// }

// const subMessages = async (chatID, pageSize = 50, callback) => {
//     const q = query(messagesCol(chatID), orderBy("createdAt", "asc"), limit(pageSize))
//     return onSnapshot(q, snap => cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
// }



// const sendMessage = async (chatId, { senderId, text }) => {
//   const ref = await addDoc(messagesCol(chatId), { senderId, text, createdAt: serverTimestamp() });
//   await updateDoc(doc(db, "chats", chatId), { lastMessage: text, updatedAt: serverTimestamp() });
//   return ref.id;
// }