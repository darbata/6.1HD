import { ScrollArea } from '@/components/ui/scroll-area'
import CommentCard from './CommentCard.jsx'
import { listenToComments } from '../api/articles.repo.js'
import { useState, useEffect } from 'react'

const CommentSection = ({articleId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const unsub = listenToComments(articleId, setComments)
        return () => unsub()
    }, [articleId])

    return (
        <section className="w-full flex flex-col gap-y-8">
            <h2 className="text-xl">Comments</h2>
            <ScrollArea className="border rounded p-4">
                <div className="flex  flex-col max-h-[300px] gap-y-4 ">
                    {comments.map((comment, i) => <CommentCard key={i} comment={comment} />)}
                </div>
            </ScrollArea>
        </section>
    )
}
export default CommentSection