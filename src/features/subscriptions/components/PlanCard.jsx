import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const PlanCard = ({ plan }) => {
    return (
        <Card className="aspect-[3/4] flex flex-col justify-around items-center">
            <CardHeader className="w-full flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{plan.title}</h2>
                <p className="text-5xl font-bold">${plan.monthlyPrice}</p>
                <p className="text-muted-foreground">Per user/month, billed monthly</p>
            </CardHeader>

            <CardContent className="w-full">
                <p className="font-bold">{plan.description}</p>
                <ul className="list-disc pl-5">
                    {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="w-full flex justify-center items-center">
                <Button className="w-full">{ plan.btnCta }</Button>
            </CardFooter>
        </Card>
    )
}

export default PlanCard