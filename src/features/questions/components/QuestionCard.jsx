import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { timestampToDate } from "@/services/utilities"

const QuestionCard = ({question, handleDelete}) => {
    const [visible, setVisible] = useState(false)

    const date = question.createdAt.toLocaleDateString()

    return (
        <Card className={`flex flex-col w-full ${visible ? "" : "min-h-full aspect-[5/1]"}`}>
            <CardHeader className="grid grid-cols-16">
                <p className={`grid col-span-14 text-l ${visible ? "" : "line-clamp-1"}`}>{question.title}</p>
                <Toggle 
                    pressed={visible}
                    onPressedChange={setVisible}
                    className="grid col-span-1 aspect-square"
                >
                    {visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Toggle>
                <Button onClick={handleDelete} className="grid col-span-1 aspect-square" variant="destructive">
                    <Trash2 /> 
                </Button>
            </CardHeader>

            <CardContent>
                <p className={`${visible ? "" : "line-clamp-1"}`}>{question.description}</p>
            </CardContent>

            <CardFooter>
                <p className="ml-auto">{date}</p>
            </CardFooter>
        </Card>
    )
}

export default QuestionCard