import { ScrollArea } from "@/components/ui/scroll-area"
import QuestionCard from "../components/QuestionCard"
import { getAllQuestions } from "../api/questions.repo"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { useState, useMemo, useEffect } from "react"

const QuestionsPage = () => {
  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({from: null, to: null}) 
  const [hidden, setHidden] = useState(new Set())
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllQuestions()
      setQuestions(data)
    }
    fetchData()
  }, [])


  const handleDelete = (id) => {
    setHidden(prev => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    const from = dateRange?.from && new Date(dateRange.from).setHours(0,0,0,0)
    const to   = dateRange?.to   && new Date(dateRange.to).setHours(23,59,59,999)

    return questions.filter((q) => {
      if (hidden.has(String(q.id))) return false   // <-- was index-based

      const ts = q.timestamp ?? q.createdAt        // pick the field you actually use
      const t = ts ? new Date(ts).getTime() : null
      if (from && t && t < from) return false
      if (to && t && t > to) return false

      if (!s) return true
      return (
        q.title?.toLowerCase().includes(s) ||
        q.body?.toLowerCase().includes(s) ||        // or q.description if that's your field
        (Array.isArray(q.tags) && q.tags.some(tag => tag.toLowerCase().includes(s)))
      )
    })
  }, [questions, search, dateRange?.from, dateRange?.to, hidden])

  return (
    <div className="grid grid-cols-4 w-full h-full gap-2">
        <div className="col-span-1 flex flex-col items-center gap-4">
          <Input onChange={(event) => setSearch(event.target.value)} value={search} className="w-full"></Input>
          <Calendar mode="range" selected={dateRange} onSelect={setDateRange} className="border rounded w-full"></Calendar>
        </div>
        <ScrollArea className="rounded-md border h-[800px] w-full col-span-3">
            <div className="p-4 flex flex-col gap-4">
              {filtered.map((question) => (
                <QuestionCard key={question.id} question={question} handleDelete={() => handleDelete(question.id)} />
              ))}
            </div>
        </ScrollArea>
    </div>
  )
}

export default QuestionsPage