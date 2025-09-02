import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import QuestionListItem from "./components/QuestionListItem"

const questions = [
  {
    title: "How to optimize React performance?",
    body: "I'm noticing slow re-renders in my React app. What are the best practices for improving performance?",
    tags: ["react", "performance", "frontend"],
    timestamp: "2025-09-01T09:15:00Z"
  },
  {
    title: "What is the difference between var, let, and const?",
    body: "I see these three ways to declare variables in JavaScript. When should I use each?",
    tags: ["javascript", "variables", "es6"],
    timestamp: "2025-08-28T14:32:00Z"
  },
  {
    title: "How to center a div in CSS?",
    body: "I want to horizontally and vertically center a div. What is the simplest way to do it?",
    tags: ["css", "layout", "frontend"],
    timestamp: "2025-08-25T18:47:00Z"
  },
  {
    title: "What are React hooks?",
    body: "I hear a lot about hooks like useState and useEffect. Can someone explain what they are and why they're useful?",
    tags: ["react", "hooks", "javascript"],
    timestamp: "2025-08-22T11:20:00Z"
  },
  {
    title: "Difference between SQL and NoSQL databases?",
    body: "When should I choose SQL over NoSQL for a project, and what are the trade-offs?",
    tags: ["database", "sql", "nosql"],
    timestamp: "2025-08-20T07:55:00Z"
  },
  {
    title: "How to handle authentication in Next.js?",
    body: "I want to add login and signup to my Next.js app. What libraries or approaches are recommended?",
    tags: ["nextjs", "authentication", "webdev"],
    timestamp: "2025-08-18T13:40:00Z"
  },
  {
    title: "What is Git rebase and how is it different from merge?",
    body: "I see both git merge and git rebase being used. What’s the difference and when should I use each?",
    tags: ["git", "version-control", "rebase"],
    timestamp: "2025-08-15T10:05:00Z"
  },
  {
    title: "How does async/await work in JavaScript?",
    body: "I’m used to promises, but async/await looks cleaner. How exactly does it work under the hood?",
    tags: ["javascript", "async", "promises"],
    timestamp: "2025-08-12T16:25:00Z"
  },
  {
    title: "Best practices for responsive web design?",
    body: "I want my website to look good on both desktop and mobile. What are some standard approaches to achieve this?",
    tags: ["responsive", "css", "webdesign"],
    timestamp: "2025-08-10T12:00:00Z"
  }
]


const FeaturedQuestions = ({className}) => {
  return (
      <section className={`${className}`}>
        <h2 className="text-3xl font-bold mb-6">Featured Questions</h2>
        <ScrollArea className="h-90 w-full rounded-md border">
            <div className="p-4">
            <div className="w-full h-[1.5rem] grid grid-rows-1 grid-cols-12 gap-2 py-1">
                <h4 className="col-span-4 mb-4 text-sm leading-none font-medium">Title</h4>
                <h4 className="col-span-7 mb-4 text-sm leading-none font-medium">Description</h4>
                <h4 className="col-span-1 mb-4 text-sm leading-none font-medium">Date</h4>
            </div>
            <Separator className="" />
            {questions.map((question, index) => (
                <div key={question.title}>
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