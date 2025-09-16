import { Card, CardContent } from "@/components/ui/card"

const CommentCard = ({comment}) => {
    return (
        <Card className="w-full h-[120px]">
            <CardContent>
                <p>{comment.displayName}</p>
                <p className="text-sm line-clamp-2">{comment.content}</p>
            </CardContent>
        </Card>
    )
}

export default CommentCard