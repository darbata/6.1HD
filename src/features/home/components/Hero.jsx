import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-20">
            <h1 className="text-8xl font-extrabold max-w-[900px]">Learn, Build, Share at DEV@DEAKIN</h1>
            <p className="text-3xl text-muted-foreground max-w-[900px]">Articles, tutorials, and answers to the most common student questions in one place.</p>
            <div className="grid grid-cols-2 gap-8 min-w-[450px]">
                <Button>Explore Articles</Button>
                <Button variant="secondary">Ask a Question</Button>
            </div>
        </div>
    )
}

export default Hero