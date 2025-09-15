import PlanCard from '../components/PlanCard'
import { Separator } from '@/components/ui/separator'

const plans = [
    {
        title: "Free",
        monthlyPrice: 0,
        description: "Everything any student needs",
        features: ["a cool feature", "okay feature", "a really reallly really cool featur", "feature", "a useful feature"],
        btnCta: "Get started for free"
    },
    {
        title: "Pro",
        monthlyPrice: 10,
        description: "Accelerate your learning today",
        features: ["a cool feature", "okay feature", "a really reallly really cool featur", "feature", "a useful feature"],
        btnCta: "Get started with Pro"
    },
    {
        title: "Pro+",
        monthlyPrice: 100,
        description: "For those who are serious about their studies",
        features: ["a cool feature", "okay feature", "a really reallly really cool featur", "feature", "a useful feature"],
        btnCta: "Get started with Pro+"
    }
]

const PricingsPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-20">
            <div className="w-full flex flex-col justify-center items-center max-w-[600px] text-center gap-4">
                <h1 className='font-bold text-7xl'>Plans and Pricing</h1>
                <p className="text-muted-foreground">For whatever kind of student you are, we have a plan that will aligns with you. Choose the plan that fits your needs.</p>
            </div>

            <Separator />

            <div className="grid grid-cols-3 gap-18">
                {plans.map((plan) => <PlanCard key={plan.title} plan={plan} />)}
            </div>
        </div>
    )
}

export default PricingsPage