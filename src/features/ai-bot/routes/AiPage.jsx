import Prompt from "../components/Prompt"
import BotChat from "../components/BotChat"
import { Button } from "@/components/ui/button"
import useSubscription from "@/features/subscriptions/hooks/useSubscription"
import { useAuth } from "@/app/contexts/AuthContext"
import { deleteChat } from "../api/gemini"

const AiPage = () => {
  const subscribed = useSubscription()

  const {currentUser} = useAuth()

  if (!subscribed) {
    return <div className="text-4xl font-bold">Please subscribe to access this feature</div>
  }

  const handleDelete = () => {
    deleteChat(currentUser.uid)
  }

  return (
      <section className="h-[800px] max-h-[800px] w-full flex flex-col">
          <BotChat />
          <div className="w-full p-4">
              <Prompt className="w-full" />

          </div>
          <div className="w-full flex justify-end items-end pr-4">
            <Button onClick={handleDelete} variant="destructive" className="w-[150px]">Delete Chat History</Button>
          </div>
      </section>
  )
}

export default AiPage