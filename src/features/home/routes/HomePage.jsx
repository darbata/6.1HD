import Hero from "../components/Hero"
import FeaturedArticles from "../components/FeaturedArticles"
import FeaturedQuestions from "../components/FeaturedQuestions"
import { Separator } from "@/components/ui/separator"
import FadeInComponent from '@/shared/animations/FadeInComponent'

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-60">

      <FadeInComponent delay={0.15}>
        <Hero />
      </FadeInComponent>

      <Separator />

      <FadeInComponent delay={0.15}>
        <FeaturedArticles />
      </FadeInComponent>

      <Separator />

      <FadeInComponent delay={0.15}>
        <FeaturedQuestions />
      </FadeInComponent>

      <Separator />

    </div>
  )
}

export default HomePage