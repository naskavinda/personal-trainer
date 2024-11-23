import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=600&width=400&text=Your+Name"
            alt="Your Name"
            width={400}
            height={600}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                [Your journey description here. Talk about how you got into bodybuilding, your passion for fitness, and what drives you to help others.]
              </p>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mb-4">
                <li>Certified Personal Trainer (CPT)</li>
                <li>Nutrition Specialist</li>
                <li>Competition Prep Coach</li>
                {/* Add more certifications as needed */}
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>My Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                [Your training philosophy. Explain your approach to fitness, nutrition, and how you help clients achieve their goals.]
              </p>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Work With Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

