import { Card, CardContent } from "@/components/ui/card"

const CommentCard = ({comment}) => {
    return (
        <Card className="w-full h-[150px]">
            <CardContent>
                <p>{comment.displayName}</p>
                <p className="text-sm">{comment.content}</p>
            </CardContent>
        </Card>
    )
}

export default CommentCard