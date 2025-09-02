import Hero from "../components/Hero"
import FeaturedArticles from "../components/FeaturedArticles"
import FeaturedQuestions from "../components/FeaturedQuestions"
import { Separator } from "@/components/ui/separator"
import FadeInComponent from '@/shared/animations/FadeInComponent'

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">

      <FadeInComponent delay={0.15}>
        <Hero className="min-h-screen"/>
      </FadeInComponent>

      <FadeInComponent delay={0.15}>
        <FeaturedArticles className="min-h-screen"/>
      </FadeInComponent>

      <FadeInComponent delay={0.15}>
        <FeaturedQuestions className="min-h-screen"/>
      </FadeInComponent>

    </div>
  )
}

export default HomePage