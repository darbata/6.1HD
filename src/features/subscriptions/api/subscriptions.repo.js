import { getProducts, getStripePayments } from "@invertase/firestore-stripe-payments";
import { app, db } from "@/services/firebase";
import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions"

const functions = getFunctions(app, "us-central1");

const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "users"
})

export const getPlans = async () => {
    const products = await getProducts(payments, {
        includePrices: true,
        activeOnly: true
    })

    return products
}

export const getCheckoutUrl = async (userId, priceId) => {
    const checkoutSessionRef = collection (db, "users", userId, "checkout_sessions")

    const docRef = await addDoc(checkoutSessionRef, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })

    return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(docRef, (snap) => {
            const {error, url} = snap.data()

            if (error) {
                unsubscribe()
                reject (Error(`an error occured: ${error.message}`))
            }

            if (url) {
                console.log("Stripe Checkout URL:", url)
                unsubscribe()
                resolve(url)
            }
        })
    })
}

export const isUserSubscribed = async (userId) => {
    if (!userId) return false

    const subscriptionsRef = collection(db, "users", userId, "subscriptions")
    const q = query (subscriptionsRef, where ("status", "in", ["trialing", "active"]))
    const snap = await getDocs(q)
    return snap.docs.length > 0
}

const createPortalLink = async (userId) => {
    const createLink = httpsCallable(
        functions,
        "ext-firestore-stripe-payments-createPortalLink"
    )

    const { data } = await createLink({ returnUrl: window.location.origin });

    console.log(data)

    return data.url
}

export const getUserPortalLink = async (userId) => {
    const url = await createPortalLink(userId)
    return url
}