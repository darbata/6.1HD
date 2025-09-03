import { useNavigate } from "react-router-dom"
import { logout } from "../api/auth"
import { useEffect } from "react"

const SignOutPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const doLogout = async () => {
            try {
                logout() // TODO: FIX THIS
            } catch (error) {
                console.error(error)
            } finally {
                navigate("/login")
            }
        }
        doLogout()
    }, [])

    return (null)
}

export default SignOutPage