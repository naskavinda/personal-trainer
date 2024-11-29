import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Transformations() {
  const transformations = [
    {
      name: "John Doe",
      before: "/placeholder.svg?height=400&width=300&text=Before",
      after: "/placeholder.svg?height=400&width=300&text=After",
      testimonial: "I never thought I could achieve this. Thanks to [Your Name], I'm in the best shape of my life!"
    },
    {
      name: "Jane Smith",
      before: "/placeholder.svg?height=400&width=300&text=Before",
      after: "/placeholder.svg?height=400&width=300&text=After",
      testimonial: "The customized meal plan and workout routine were game-changers. I've never felt better!"
    },
    {
      name: "Mike Johnson",
      before: "/placeholder.svg?height=400&width=300&text=Before",
      after: "/placeholder.svg?height=400&width=300&text=After",
      testimonial: "I've tried many trainers before, but [Your Name]'s approach is truly transformative. Highly recommended!"
    },
    // Add more transformations as needed
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Client Transformations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {transformations.map((transformation, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{transformation.name}&apos;s Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <Image
                  src={transformation.before}
                  alt={`${transformation.name} Before`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src={transformation.after}
                  alt={`${transformation.name} After`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <CardDescription className="text-center italic">&quot;{transformation.testimonial}&quot;</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
