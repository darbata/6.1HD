import { storage } from "./firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

export const uploadImageToBucket = async (file) => {
    // upload image and then get the downlaod link to it
    const storageRef = ref(storage, `images/${file.name}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}

export const uploadPfpToBucket = async (file, userID) => {
    // upload image and then get the downlaod link to it
    const storageRef = ref(storage, `images/${userID}-pfp`) // overwrite old${file.name}
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}