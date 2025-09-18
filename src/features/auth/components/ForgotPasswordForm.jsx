import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { sendForgotPasswordEmail } from "../api/auth"

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        sendForgotPasswordEmail(email)
        setEmail("")
    }

    return (
        <div className="flex flex-col justify-around h-full w-full gap-4">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">Forgot your password?</h1>
                <p className="text-muted-foreground text-balance">Enter your email here and we'll send you an email to reset it.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <Button className="w-full">Send</Button>
            </form>
        </div>
    )
}

export default ForgotPasswordForm