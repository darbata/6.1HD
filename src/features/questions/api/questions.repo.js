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
  const snap = await getDocs(query(questionsCol))
  return snap.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate?.() || data.createdAt || null, // convert immediately so its easier to work with
      // {seconds, nanoseconds} => Date object
    }
  })
}

// export const deleteQuestion = async (questionId) => {
//     await deleteDoc(doc(db, "questions", questionId))
// }