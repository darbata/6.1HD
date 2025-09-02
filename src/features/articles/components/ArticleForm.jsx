import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import FormInput from "@/shared/ui/forms/FormInput"

const ArticleForm = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!file) {
      setPreview(null)
      return
    }
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  const handleFileUpload = (event) => {
    const f = event.target.files?.[0] ?? null
    setFile(f)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className="flex flex-col justify-between gap-2 max-h-[800px] w-full max-w-[600px] aspect-[3/4]">
      <FormInput
        label="Title"
        input="title"
        inputType="text"
        description="Give your article an eye-catching title."
      />

      <FormInput
        label="Abstract"
        input="abstract"
        inputType="textArea"
        description="Provide a TLDR :)"
      />

      <FormInput
        label="Content"
        input="content"
        inputType="textArea"
        description="Go ahead and start writing..."
      />

      <FormInput
        label="Tags"
        input="tags"
        inputType="text"
        description="Add tags."
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fileInput">Article Image</Label>
          <Input
            id="fileInput"
            name="file"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="cursor-pointer"
          />
          <p className="text-xs text-muted-foreground">Select a single image file (SVG, PNG, JPG, GIF).</p>

          <div className="w-full h-50 border rounded flex items-center justify-center overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-sm text-muted-foreground">No image</span>
            )}
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ArticleForm