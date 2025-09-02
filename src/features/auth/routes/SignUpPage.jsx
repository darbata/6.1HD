import SignUpForm from "@/features/auth/components/SignUpForm.jsx"
import { Card, CardContent } from "@/components/ui/card"

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen max-h-screen bg-background overflow-hidden">
      <Card className="w-[850px] aspect-[3/2] p-0 overflow-hidden">
        <CardContent className="grid grid-cols-2 h-full p-0" >

          <div className="h-full w-full min-w-0 min-h-0">
            <img 
              src="/login.png" 
              alt="login form art" 
              className="block object-cover h-full w-full"
            />
          </div>

          <div className="flex items-center justify-center p-6">
            <SignUpForm />
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpPage