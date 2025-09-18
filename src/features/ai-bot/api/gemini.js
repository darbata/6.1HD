import axios from "axios"
import { deleteDoc, orderBy, getDocs, doc, addDoc, collection, serverTimestamp, query, onSnapshot } from "firebase/firestore"
import { db } from "@/services/firebase"

const gemini_api_key = import.meta.env.VITE_GEMINI_API_KEY

const getMessages = async (userId) => {
    const chatRef = collection(db, "users", userId, "ai-chat")

    const q = query(chatRef, orderBy("createdAt", "asc"))

    const snap = await getDocs(q)

    const messages = snap.docs
        .map((d) => d.data())
        .filter((msg) => msg.role && msg.text)
        .map(({role, text}) => ({role, text}))

    return messages
}


const sendPrompt = async ( messages ) => {
    // send prompt with full chat history context

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${gemini_api_key}`

    const contents = messages.map((message) => ({
        role: message.role,
        parts: [{text : message.text}]
    }))

    const body = { contents }

    const { data } = await axios.post(url, body, {
        headers: { "Content-Type": "application/json"}
    })

    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p?.text ?? "")
        .join("")
        .trim() || "";

    return text
}

export const createPrompt = async ( userId, prompt ) => {
    const chatRef = collection(db, "users", userId, "ai-chat")

    // write user message
    const userRecentMessage = {
        role: "user",
        text: prompt,
        createdAt: serverTimestamp()
    }
    await addDoc(chatRef, userRecentMessage)

    // get full history
    const history = await getMessages(userId)

    // call gemini using full history
    const reply = await sendPrompt(history)

    // write response to chat
    const botReply = {
        role: "model",
        text: reply,
        createdAt: serverTimestamp()
    }
    await addDoc(chatRef, botReply)

    return reply
}


// listen to chataa
export const listenToAiChat = (userId, onUpdate) => {
    const chatRef = collection(db, "users", userId, "ai-chat")
    const q = query(chatRef, orderBy("createdAt", "asc"))


    return onSnapshot(
        q,
        (snap) => {
            const messages = snap.docs
                .map((d) => ({ id: d.id, ...(d.data()) }))
                .filter((m) => m.role && m.text)
                .map(({ id, role, text }) => ({ id, role, text }))
            onUpdate(messages)
        }
    )
}

// delete everyhting

export const deleteChat = async (userId) => {
  const chatRef = collection(db, "users", userId, "ai-chat")
  const snap = await getDocs(chatRef)
  for (const d of snap.docs) {
    await deleteDoc(d.ref)
  }
}