import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../api/auth"
import { useAuth } from "@/app/contexts/AuthContext"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/') // navigate to home page
    }
  }, [currentUser])

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      login(email, password)
      // useEffect will take place and auto navigate to home page
    } catch (error) {
    }
  }

  return (
    <div className="flex flex-col justify-around h-full w-full">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground text-balance">Login to your DEV@DEAKIN account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Label htmlFor="password">Password</Label>
        <div>
          <Input
            id="password"
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <div className="flex justify-end" onClick={() => navigate('/forgot-password')}>
            <p className="text-sm text-muted-foreground cursor-pointer">forgot password?</p>
          </div>
        </div>
        <Button className="w-full" type="submit">Login</Button>
        <div className="relative flex items-center text-sm">
          <div className="flex-grow border-t border-border" />
            <span className="mx-2 text-muted-foreground bg-card my-6">Or sign up here</span>
          <div className="flex-grow border-t border-border" />
        </div>
        <Button asChild variant="secondary" className="w-full">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </form>
    </div>

  )
}

export default LoginForm