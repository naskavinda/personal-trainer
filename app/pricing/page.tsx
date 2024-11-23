import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    duration: "per month",
    description: "Perfect for beginners",
    features: [
      "1 training session per week",
      "Basic meal plan",
      "Email support",
      "Access to our app"
    ],
    conditions: "3-month minimum commitment"
  },
  {
    name: "Pro",
    price: "$99",
    duration: "per month",
    description: "Ideal for dedicated fitness enthusiasts",
    features: [
      "3 training sessions per week",
      "Customized meal plan",
      "24/7 chat support",
      "Access to our app",
      "Monthly progress review"
    ],
    conditions: "6-month minimum commitment"
  },
  {
    name: "Elite",
    price: "$199",
    duration: "per month",
    description: "For those seeking maximum results",
    features: [
      "5 training sessions per week",
      "Personalized meal plan with chef consultation",
      "24/7 priority support",
      "Access to our premium app features",
      "Weekly progress review",
      "Quarterly photoshoot"
    ],
    conditions: "12-month commitment with 10% discount"
  }
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span> {plan.duration}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="mb-4 text-sm text-muted-foreground">Conditions: {plan.conditions}</p>
              <Button asChild className="w-full">
                <Link href="/contact">Choose Plan</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

