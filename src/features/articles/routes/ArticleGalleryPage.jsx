import { Button } from "@/components/ui/button"
import ArticleCard from "../components/ArticleCard"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getAllArticles } from "../api/articles.repo"
import { useState, useEffect } from "react"

const ArticleGalleryPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles()
            .then(data => {
                setArticles(data)
            })
    }, [])

    return (
        <section className="w-full h-full flex flex-col gap-y-24">
            <div className="flex flex-col gap-y-4 text-center">
                <h2 className="text-4xl font-bold">Articles</h2>
                <p className="text-sm text-muted-foreground">Discover content written by fellow students. From programming topics to general student life hacks.</p>
            </div>
            <ScrollArea>
                <div className="grid grid-cols-3 gap-8 max-h-[800px]">
                    {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
                </div>
            </ScrollArea>
        </section>
    )
}

export default ArticleGalleryPage