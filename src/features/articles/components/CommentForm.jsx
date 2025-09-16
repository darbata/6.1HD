import { useAuth } from "@/app/contexts/AuthContext"
import FormInput from "@/shared/ui/forms/FormInput"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createComment } from "../api/articles.repo"


const CommentForm = ({articleId}) => {
    const auth = useAuth()
    const displayName = auth.currentUser.displayName
    const [content, setContent] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        createComment({articleId, displayName, content})
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-2 p-4">
            <FormInput
                label={`Comment as ${displayName}:`}
                input="content"
                inputType="text"
                description="Say something valuable or a message for the writer."
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <Button type="submit">Share</Button>
        </form>
    )
}

export default CommentForm