import { Card, CardContent } from "@/components/ui/card"

const ArticleCard = ({ article }) => {
  return (
    <Card className="overflow-hidden aspect-[3/4]">
      <CardContent className="flex flex-col justify-around h-full">
        <img
            src="/login.png"
            alt="article image"
            className="w-full h-48 object-cover radius"
        />

        <h3 className="text-xl font-semibold line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-foreground line-clamp-3">
          {article.description}
        </p>
        <div className="flex">
            <p className="text-xs text-muted-foreground ml-auto">By {article.author}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ArticleCard