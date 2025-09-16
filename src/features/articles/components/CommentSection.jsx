import { ScrollArea } from '@/components/ui/scroll-area'
import CommentCard from './CommentCard.jsx'

const CommentSection = () => {

    const comments = [
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "Deep Work argues that intense, focused effort on cognitively demanding tasks yields greater productivity, skill, and value, while shallow work and distractions undermine progress and success."
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
        {
            displayName: "Kazuya",
            content: "this was really insightful!"
        },
    ]

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