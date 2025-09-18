import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import QuestionListItem from "./components/QuestionListItem"
import { getAllQuestions } from "@/features/questions/api/questions.repo"
import { useState, useEffect } from "react";

const FeaturedQuestions = ({className}) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getAllQuestions()
      .then(res => {
        setQuestions(res)
      })
  }, [])


  return (
      <section className={`${className}`}>
        <h2 className="text-3xl font-bold mb-6">What are students talking about?</h2>
        <ScrollArea className="h-90 w-full rounded-md border">
            <div className="p-4">
              {questions.map((question, index) => (
                  <div key={index}>
                    <QuestionListItem question={question} />
                  <Separator className="my-2" />
                  </div>
              ))}
            </div>
        </ScrollArea>
    </section>
  )
}



export default FeaturedQuestions