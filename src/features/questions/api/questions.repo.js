import { db } from "@/services/firebase"
import { doc, addDoc, deleteDoc, query, Timestamp, collection, getDocs, serverTimestamp } from "firebase/firestore"

// collection reference
const questionsCol = collection(db, "questions");

// routes
export const createQuestion = async ({title, description, tags}) =>  {
    const payload = {
        title: title.trim(),
        description: description.trim(),
        tags: tags,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    }
    const docRef = await addDoc(questionsCol, payload)
    return docRef.id;
}

export const getAllQuestions = async () => {
    const q = query(questionsCol);
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

// export const deleteQuestion = async (questionId) => {
//     await deleteDoc(doc(db, "questions", questionId))
// }