import { Card, CardContent } from "@/components/ui/card"
import ForgotPasswordForm from "../components/ForgotPasswordForm"

const LoginPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen max-h-screen overflow-hidden">
      <Card>
        <CardContent className="h-full p-0" >
          <div className="flex items-center justify-center p-6">
            <ForgotPasswordForm />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage