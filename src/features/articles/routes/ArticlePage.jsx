import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../api/articles.repo" 
import CommentSection from "../components/CommentSection.jsx"
import ReactMarkdown from "react-markdown";
import CommentForm from "../components/CommentForm";

const ArticlePage = () => {
    const { articleId } = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticle(articleId)
            .then((data) => {
                setArticle(data)
            })
    }, [articleId])

    return (
        <section className="flex flex-col gap-10">
            { article && (
                <section className="flex flex-col gap-8">
                    <img className="rounded w-full max-h-[300px] object-cover" src={article.imagePath} alt={article.title} />
                    <h2 className="font-bold text-4xl">{article.title}</h2>
                    <p className="italic">{article.abstract}</p>
                    <ReactMarkdown>{article.articleText}</ReactMarkdown>
                </section>
            )
            }
            <CommentSection />
            <CommentForm />
        </section>
    )
}

export default ArticlePage