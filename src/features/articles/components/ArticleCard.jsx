import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"

const ArticleCard = ({article}) => {
    return(
        <Link to={`/articles/${article.id}`} >
            <Card className="w-full h-full cursor-pointer">
                <CardHeader className="">
                    <div className="flex flex-col justify-center items-center">
                        <img 
                            src={article.imagePath} alt={article.title}
                            className="w-full h-full rounded object-fill"
                        />
                    </div>

                    <div className="flex gap-2 w-full">
                        <p className="text-sm text-muted-foreground">{article.displayName}</p>
                        <span className="text-sm text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">{article.createdAt.toDate().toLocaleString()}</p>
                    </div>
                </CardHeader>

                <CardContent>
                    <h3 className="font-bold text-xl line-clamp-2">{article.title}</h3>
                </CardContent>

                <CardFooter>
                    <div className="flex flex-col gap-2">
                        <p className="line-clamp-2">{article.abstract}</p>
                        <div className="flex gap-2 h-4">
                            {article.tags.map((tag, index) => (
                                <span key = {index} className="text-muted-foreground bordered radius text-xs">{tag}</span>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ArticleCard