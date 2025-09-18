import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/ui/meteors"
import { useNavigate } from "react-router-dom"

const Hero = ({className}) => {
    const navigate = useNavigate()
    return (
        <div className={`${className} relative flex flex-col justify-center items-center text-center gap-y-20 overflow-hidden aspect-video w-full`}>

            {/* this is for the background meteors keeping number for a minimal look */}
            <div className="pointer-events-none inset-0 -z-10 absolute w-full h-full">
                <Meteors number={8} className="bg-slate-400 before:from-slate-400" />
            </div>


            <h1 className="text-8xl font-extrabold max-w-[900px]">Learn, Build, Share at DEV@DEAKIN</h1>
            <p className="text-3xl text-muted-foreground max-w-[900px]">Articles, tutorials, and answers to the most common student questions in one place.</p>
            <div className="grid grid-cols-2 gap-8 min-w-[450px]">
                <Button className="text-xl" onClick={() => navigate('/questions')}>Explore Articles</Button>
                <Button className="text-xl"variant="secondary" onClick={() => navigate('/post?type=question')}>Ask a Question</Button>
            </div>
        </div>
    )
}

export default Hero