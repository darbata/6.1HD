import { useState, useEffect } from "react"
import { createQuestion } from "../api/questions.repo"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import FormInput from "@/shared/ui/forms/FormInput"
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languageMap = {
  javascript: javascript(),
  python: python(),
  java: java(),
  "c++": cpp(),
}

const QuestionForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("# HELLO WORLD")
  const [tagsInput, setTagsInput] = useState("")
  const [tags, setTags] = useState([])
  const [code, setCode] = useState("// Write some code here...")
  const [codeLanguage, setCodeLanguage] = useState("javascript")

  const handleSubmit = async (event) => {
    event.preventDefault()
    let id = await createQuestion({title, description, code, codeLanguage, tags})

    if (id) {
      window.location.reload()
    }
  }

  const handleTagChange = (event) => {
    setTagsInput(event.target.value)
    const tagArray = event.target.value
      .split(/[.,\s]+/) // split on comma, dot, or space
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
      .slice(0, 3)
    setTags(tagArray)
  }

  return (
    <form className="flex flex-col justify-between gap-2 max-h-[800px] w-full max-w-[600px] aspect-[3/4]" onSubmit={handleSubmit}>
      <FormInput
        label="Title"
        input="title"
        inputType="text"
        description="Give your a question a short title."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <ScrollArea>
        <FormInput
          label="Description"
          input="description"
          inputType="textArea"
          description="Provide more detail on what your question is about. Feel free to use Markdown syntax."
          className="max-h-[200px] h-[200px]"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </ScrollArea>

      {/* code */}
      <div className="flex flex-col gap-2">
        <DropdownMenu className="ml-auto">
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto w-[100px]" variant="outline">{codeLanguage}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuItem onClick={() => setCodeLanguage("javascript")}>Javascript</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCodeLanguage("python")}>Python</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCodeLanguage("java")}>Java</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCodeLanguage("c++")}>C++</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ScrollArea>
          <div className="max-h-[200px] h-[200px]">
            <CodeMirror 
              value={code}
              extensions={[languageMap[codeLanguage]] || javascript()}
              onChange={setCode}
            />
          </div>
        </ScrollArea>
      </div>


      <FormInput
        label="Tags"
        input="tags"
        inputType="text"
        description="Add tags."
        value={tagsInput}
        onChange={handleTagChange}
      />

      <div className="flex gap-2 pl-2 pr-2">
        {tags.map((tag, index) => (
          <span key = {index} className="text-muted-foreground bordered radius text-xs">{tag}</span>
        ))}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default QuestionForm