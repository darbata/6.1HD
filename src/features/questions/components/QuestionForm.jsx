import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import FormInput from "@/shared/ui/forms/FormInput"

const ArticleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className="flex flex-col justify-between gap-2 max-h-[800px] w-full max-w-[600px] aspect-[3/4]">
      <FormInput
        label="Title"
        input="title"
        inputType="text"
        description="Give your a question a short title."
      />

      <FormInput
        label="Description"
        input="description"
        inputType="textArea"
        description="Provide more detail on what your question is about."
        className="h-full"
      />

      <FormInput
        label="Tags"
        input="tags"
        inputType="text"
        description="Add tags."
      />

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ArticleForm