import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card id="personal-training" className="flex flex-col">
          <CardHeader>
            <CardTitle>Personal Training</CardTitle>
            <CardDescription>One-on-one sessions tailored to your goals</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[300px] h-[200px] relative">
              <Image
                src="/personal-training.jpg"
                alt="Personal Training"
                fill
                className="rounded-md mb-4 object-cover"
              />
            </div>
            <ul className="list-disc list-inside">
              <li>Customized workout plans</li>
              <li>Form correction and technique improvement</li>
              <li>Progress tracking and adjustments</li>
              <li>Motivation and accountability</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/contact">Book a Session</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card id="meal-plans" className="flex flex-col">
          <CardHeader>
            <CardTitle>Custom Meal Plans</CardTitle>
            <CardDescription>Nutrition guidance to fuel your transformation</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[300px] h-[200px] relative">
              <Image
                src="/custom-meal-plans.jpg"
                alt="Custom Meal Plans"
                fill
                className="rounded-md mb-4 object-cover"
              />
            </div>
            <ul className="list-disc list-inside">
              <li>Personalized macro calculations</li>
              <li>Meal suggestions and recipes</li>
              <li>Grocery lists</li>
              <li>Supplement recommendations</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/contact">Get Your Plan</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card id="online-coaching" className="flex flex-col">
          <CardHeader>
            <CardTitle>Online Coaching</CardTitle>
            <CardDescription>Expert guidance, anywhere in the world</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[300px] h-[200px] relative">
              <Image
                src="/online-coaching.jpg"
                alt="Online Coaching"
                fill
                className="rounded-md mb-4 object-cover"
              />
            </div>
            <ul className="list-disc list-inside">
              <li>Weekly check-ins and adjustments</li>
              <li>Video form checks</li>
              <li>24/7 chat support</li>
              <li>Custom workout and nutrition plans</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/contact">Start Coaching</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

