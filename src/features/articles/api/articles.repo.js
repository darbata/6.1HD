import { getDownloadURL, uploadBytes, ref } from "firebase/storage"
import { db, storage } from "../utils/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

// firebase reference
const articlesCol = collection(db, "articles")

// routes
export const createArticle = async ({title, imageFile, abstract, articleText, tags}) => {
    const storageRef = ref(storage, `images/${imageFile.name}`)

    // upload image to bucket
    await uploadBytes(storageRef, imageFile)

    // get path
    const url = await getDownloadURL(storageRef)

    // create payload
    const payload = {
        title: title.trim(),
        imagePath: url,
        abstract: abstract,
        articleText: articleText,
        tags: tags,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    }

    const docRef = await addDoc(articlesCol, payload)
    return docRef.id
}