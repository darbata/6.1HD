import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'sonner'
import { signup } from "../api/auth"
import { useAuth } from "@/app/contexts/AuthContext"

const SignupForm = () => {
  const [form, setForm] = useState(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  )

  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/') // navigate to home page
    }
  }, [currentUser])


  // use to map => firebase error -> user message
  const errorMessages = {
    "auth/email-already-in-use": "This email is already registered",
    "auth/weak-password": "Password must be at least 6 characters long",
    "auth/invalid-email": "Invalid email address",
    default: "Error, try again later"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      toast.error("All fields required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const loadingId = toast.loading("Creating account...");

    try {
      await signup(form);
      toast.dismiss(loadingId);
      toast.success("Account created successfully");
    } catch (error) {
      console.error(error)
      toast.dismiss(loadingId);
      const message = errorMessages[error.code] || errorMessages.default;
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col justify-around h-full w-full">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Join the Community</h1>
        <p className="text-muted-foreground text-balance">
          Sign Up for a DEV@DEAKIN account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">


        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Choose a username"
          value={form.username}
          onChange={(event) => setForm({...form, username: event.target.value})}
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          value={form.email}
          onChange={(event) => setForm({...form, email: event.target.value})}
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={form.password}
          onChange={(event) => setForm({...form, password: event.target.value})}
          required
        />

        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          value={form.confirmPassword}
          onChange={(event) => setForm({...form, confirmPassword: event.target.value})}
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