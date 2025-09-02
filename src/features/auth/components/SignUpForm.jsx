import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { toast } from 'sonner'

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.loading("Loading")

    if (!email || ! password || confirmPassword) {
      toast.dismiss()
      toast.error("Please fill out all fields");
      return;
    }

    if (password != confirmPassword) {
      toast.dismiss()
      toast.warning("Please ensure passwords match.")
      return;
    }

    try {

    } catch (error) {
      toast.dismiss()
      toast.error("Problem logging in.")
    }
  }

  return (
    <div className="flex flex-col justify-around h-full w-full">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Join the Community</h1>
        <p className="text-muted-foreground text-balance">
          Sign Up for a DEV@DEAKIN account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button className="w-full" type="submit">
          Sign Up
        </Button>

        <div className="relative flex items-center text-sm">
          <div className="flex-grow border-t border-border" />
          <span className="mx-2 text-muted-foreground bg-card my-6">
            Or login here
          </span>
          <div className="flex-grow border-t border-border" />
        </div>

        <Button asChild variant="secondary" className="w-full">
          <Link to="/login">Login</Link>
        </Button>
      </form>
    </div>
  )
}

export default SignupForm