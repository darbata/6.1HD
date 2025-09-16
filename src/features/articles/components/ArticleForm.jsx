import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import FormInput from "@/shared/ui/forms/FormInput"
import { createArticle } from "../api/articles.repo";
import { useAuth } from "@/app/contexts/AuthContext";

const ArticleForm = () => {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [articleText, setArticleText] = useState("")
  const [tagsInput, setTagsInput] = useState("")
  const [tags, setTags] = useState([])
  const [imageFile, setImageFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const auth = useAuth()
  const displayName = auth.currentUser.displayName

  useEffect(() => {
    if (!imageFile) {
      setPreview(null)
      return
    }
    const objectUrl = URL.createObjectURL(imageFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [imageFile])

  const handleFileUpload = (event) => {
    const f = event.target.files?.[0] ?? null
    setImageFile(f)
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    let id = await createArticle({displayName, title, abstract, articleText, tags, imageFile})
    if (id) {
      window.location.reload()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-2 max-h-[800px] w-full max-w-[600px] aspect-[3/4]">
      <FormInput
        label="Title"
        input="title"
        inputType="text"
        description="Give your article an eye-catching title."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <FormInput
        label="Abstract"
        input="abstract"
        inputType="textArea"
        description="Provide a TLDR :)"
        value={abstract}
        onChange={(event) => setAbstract(event.target.value)}
      />

      <FormInput
        label="Content"
        input="content"
        inputType="textArea"
        description="Go ahead and start writing... (feel free to use Markdown syntax here only)"
        value={articleText}
        onChange={(event) => setArticleText(event.target.value)}
      />

      <FormInput
        label="Tags"
        input="tags"
        inputType="text"
        description="Add tags."
        value={tagsInput}
        onChange={handleTagChange}
      />

      <div className="flex gap-2 pl-2 pr-2 h-4">
        {tags.map((tag, index) => (
          <span key = {index} className="text-muted-foreground bordered radius text-xs">{tag}</span>
        ))}
      </div>

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