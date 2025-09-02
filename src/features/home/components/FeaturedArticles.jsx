import { Card, CardContent } from "@/components/ui/card"
import ArticleCard from "./ArticleCard";

const data = [
  {
    title: "Getting Started with React",
    description: "LLearn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.Learn the fundamentals of React and how to build your first component.earn the fundamentals of React and how to build your first component.",
    content: "This tutorial covers React basics such as components, props, and state with practical code examples.",
    author: "Jane Smith",
    imagePath: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png/revision/latest?cb=20210226205256"
  },
  {
    title: "Building a RESTful API with Node.js",
    description: "Step-by-step guide to creating a RESTful API using Express.",
    content: "We’ll explore routing, middleware, and database integration to deliver a functional API.",
    author: "John Doe",
    imagePath: "https://source.unsplash.com/400x250/?nodejs,server"
  },
  {
    title: "Intro to Responsive Web Design",
    description: "Master CSS media queries and responsive layouts.",
    content: "This article demonstrates how to make websites adapt seamlessly to different devices.",
    author: "Emily Carter",
    imagePath: "https://source.unsplash.com/400x250/?web,design"
  },
];

const FeaturedArticles = ({className}) => {
    return (

        <section className={`${className}`}>
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-3 gap-4">
            {
              // TODO: SLICE TO MAX 3
              data.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))
            }
          </div>
        </section>
    )
}

export default FeaturedArticles