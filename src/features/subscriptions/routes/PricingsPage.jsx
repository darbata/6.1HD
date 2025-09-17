import PlanCard from '../components/PlanCard'
import { Separator } from '@/components/ui/separator'
import { getPlans, getUserPortalLink } from '../api/subscriptions.repo'
import { useState, useEffect } from 'react'
import useSubscription from '../hooks/useSubscription'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/app/contexts/AuthContext'

const PricingsPage = () => {
    const subscribed = useSubscription()

    const {currentUser } = useAuth()

    const currency = "aud"

    const [plans, setPlans] = useState([])

    useEffect(() => {
        (async () => {
            const products = await getPlans();

            setPlans([{
                id: "free",
                name: "Free",
                description: "Everything any student needs",
                prices: [
                    {
                        id: "free",
                        currency: "aud",
                        unit_amount: 0
                    }
                ]
            },
            ...products])
        })();
    }, []);

    const handleManagePlan = async () => {
        const url = await getUserPortalLink(currentUser.uid)
        window.location.href = url
    }

    // console.log(plans)
    return (
        <div className="w-full flex flex-col justify-center items-center gap-20">
            <div className="w-full flex flex-col justify-center items-center max-w-[600px] text-center gap-4">
                <h1 className='font-bold text-7xl'>Plans and Pricing</h1>
                <p className="text-muted-foreground">For whatever kind of student you are, we have a plan that will aligns with you. Choose the plan that fits your needs.</p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-18">
                {plans.map((plan) => { 
                    const priceObj = plan.prices?.find((p) => p?.currency?.toLowerCase() === currency)
                    let disabled = false

                    if (plan.id != "free" && subscribed) {
                        disabled = true
                    }

                    if (plan.id == "free") {
                        disabled = true
                    }
                    return <PlanCard key={plan.id} priceObj={priceObj} plan={plan} disabled={disabled}   /> 
                })}
            </div>

            <Button variant="destructive" onClick={handleManagePlan}>Manage Plan</Button>
        </div>
    )
}

export default PricingsPage