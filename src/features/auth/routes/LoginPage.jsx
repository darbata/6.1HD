import LoginForm from "@/features/auth/components/LoginForm"
import { Card, CardContent } from "@/components/ui/card"
import FadeInComponent from "@/shared/animations/FadeInComponent"

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen max-h-screen bg-background overflow-hidden">
      <Card className="w-[850px] aspect-[3/2] p-0 overflow-hidden">
        <CardContent className="grid grid-cols-2 h-full p-0" >
          <div className="flex items-center justify-center p-6">
            <LoginForm />
          </div>

          <div className="h-full w-full min-w-0 min-h-0">
            <img 
              src="/login.png" 
              alt="login form art" 
              className="block object-cover h-full w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage