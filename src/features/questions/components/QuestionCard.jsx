import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { ScrollArea } from "@/components/ui/scroll-area"
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import ReactMarkdown from "react-markdown";

// title, description, code, codeLanguage, createdAt

const languageMap = {
  javascript: javascript(),
  python: python(),
  java: java(),
  "c++": cpp(),
}


const QuestionCard = ({question, handleDelete}) => {
    const [visible, setVisible] = useState(false)

    const date = question.createdAt.toLocaleDateString()

    const lang = languageMap[(question.codeLanguage || "javascript")]


    return (
        <Card className={`flex flex-col w-full ${visible ? "" : "max-h-[80px] aspect-[5/1]"}`}>
            <CardHeader className="grid grid-cols-16">
                <p className={`grid col-span-14 text-xl ${visible ? "" : "line-clamp-1"}`}>{question.title}</p>
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

            { visible && (
                    <CardContent className="flex flex-col gap-8">
                        <ScrollArea className="border">
                            <div className="max-h-[250px] h-[250px]" >
                                <ReactMarkdown>{question.description}</ReactMarkdown>
                            </div>
                        </ScrollArea>

                        <ScrollArea>
                            <div className="max-h-[200px] h-[200px]" >
                                <CodeMirror 
                                    value={question.code ?? ""}
                                    extensions={[lang, EditorView.editable.of(false)]}
                                />
                            </div> 
                        </ScrollArea>
                    </CardContent>
                )

            }

            { visible && (
                <CardFooter>
                    <p className="ml-auto">{date}</p>
                </CardFooter>
            )}

        </Card>
    )
}

export default QuestionCard