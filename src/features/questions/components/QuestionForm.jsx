import { useState, useEffect } from "react"
import { createQuestion } from "../api/questions.repo"
import { Button } from "@/components/ui/button"
import FormInput from "@/shared/ui/forms/FormInput"

const QuestionForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tagsInput, setTagsInput] = useState("")
  const [tags, setTags] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let id = await createQuestion({title, description, tags})
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

      <FormInput
        label="Description"
        input="description"
        inputType="textArea"
        description="Provide more detail on what your question is about."
        className="h-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

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