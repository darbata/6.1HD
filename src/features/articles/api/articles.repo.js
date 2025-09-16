import { db, storage } from "@/services/firebase"
import { getDownloadURL, uploadBytes, ref } from "firebase/storage"
import { doc, getDoc, query, addDoc, getDocs, collection, orderBy, serverTimestamp } from "firebase/firestore"

// firebase reference
const articlesCol = collection(db, "articles")

// routes
export const createArticle = async ({displayName, title, abstract, articleText, tags, imageFile}) => {
    const storageRef = ref(storage, `images/${imageFile.name}`)

    // upload image to bucket
    await uploadBytes(storageRef, imageFile)

    // get path
    const url = await getDownloadURL(storageRef)

    // create payload
    const payload = {
        displayName: displayName,
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

// getAllArticles next?
export const getAllArticles = async () => {
    const q = query(articlesCol, orderBy("createdAt", "desc"))

    const snapshot = await getDocs(q)

    const articles = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return articles
}

export const getArticle = async (articleId) => {
    const docRef = doc(db, "articles", articleId)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) return null


    const article =  {
        id: docSnap.id,
        ...docSnap.data()
    }

    return article
}

export const createComment = async ({articleId, displayName, content}) => {
    const articleRef = doc(db, "articles", articleId)
    const commentsCol = collection(articleRef, "comments")

    const payload = {
        displayName: displayName,
        content: content,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    }

    const commentRef = await addDoc(commentsCol, payload)
    return commentRef.id
}