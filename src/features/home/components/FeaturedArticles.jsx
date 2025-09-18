import { Card, CardContent } from "@/components/ui/card"
// import ArticleCard from "./ArticleCard";
import { getAllArticles } from "@/features/articles/api/articles.repo";
import { useState, useEffect } from "react";
import ArticleCard from "@/features/articles/components/ArticleCard";

const FeaturedArticles = ({className}) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      getAllArticles()
        .then(res => {
          setArticles(res)
        })
    }, [])

    return (
        <section className={`${className}`}>
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-3 gap-4">
            {
              // TODO: SLICE TO MAX 3
              articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))
            }
          </div>
        </section>
    )
}

export default FeaturedArticles