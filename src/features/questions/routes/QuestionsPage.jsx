import { ScrollArea } from "@/components/ui/scroll-area"
import QuestionCard from "../components/QuestionCard"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { useState, useMemo } from "react"

const questions = [
  {
    title: "How to optimize React performance?",
    body: "II'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?'m noticing slow re-renders in my React app. What are the best practices for improving performance?",
    tags: ["react", "performance", "frontend"],
    timestamp: "2025-09-01T09:15:00Z"
  },
  {
    title: "What is the difference between var, let, and const?",
    body: "I I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?see these three ways to declare variables in JavaScript. When should I use each?",
    tags: ["javascript", "variables", "es6"],
    timestamp: "2025-08-28T14:32:00Z"
  },
  {
    title: "How I'm noticing slow re-renders in my React app. What are the best practices for improving performance?to center a div in CSS?",
    body: "I want to horizontally and vI'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?I'm noticing slow re-renders in my React app. What are the best practices for improving performance?ertically center a div. What is the simplest way to do it?",
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
const QuestionsPage = () => {
  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({from: null, to: null}) 
  const [hidden, setHidden] = useState(new Set())

  const handleDelete = (index) => {
    setHidden((prev) => new Set(prev).add(index))
  } 

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    const from = dateRange?.from && new Date(dateRange.from).setHours(0, 0, 0, 0);
    const to = dateRange?.to   && new Date(dateRange.to).setHours(23, 59, 59, 999);

    return questions.filter((q, i) => {
      if (hidden.has(i)) return false;

      const t = new Date(q.timestamp).getTime();
      if (from && t < from) return false;
      if (to && t > to) return false;

      if (!s) return true;
      return (
        q.title.toLowerCase().includes(s) ||
        q.body.toLowerCase().includes(s) ||
        q.tags.some(tag => tag.toLowerCase().includes(s))
      );
    });
  }, [questions, search, dateRange?.from, dateRange?.to, hidden]);

  return (
    <div className="grid grid-cols-4 w-full h-full gap-2">
        <div className="col-span-1 flex flex-col items-center gap-4">
          <Input onChange={(event) => setSearch(event.target.value)} value={search} className="w-full"></Input>
          <Calendar mode="range" selected={dateRange} onSelect={setDateRange} className="border rounded w-full"></Calendar>
        </div>
        <ScrollArea className="rounded-md border h-[800px] w-full col-span-3">
            <div className="p-4 flex flex-col gap-4">
              {filtered.map((question) => (
                <QuestionCard key={question.index} question={question} handleDelete={() => handleDelete(question.index)} />
              ))}
            </div>
        </ScrollArea>
    </div>
  )
}

export default QuestionsPage