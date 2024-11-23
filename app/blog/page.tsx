import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Blog() {
  const posts = [
    {
      title: "5 Essential Exercises for Building Muscle",
      description: "Discover the key exercises that will help you build muscle efficiently.",
      date: "2023-05-15",
      slug: "essential-exercises-for-muscle-building"
    },
    {
      title: "Nutrition Tips for Optimal Recovery",
      description: "Learn how to fuel your body for better recovery and growth.",
      date: "2023-06-02",
      slug: "nutrition-tips-for-recovery"
    },
    {
      title: "Overcoming Plateaus in Your Fitness Journey",
      description: "Strategies to break through plateaus and keep making progress.",
      date: "2023-06-20",
      slug: "overcoming-fitness-plateaus"
    },
    // Add more blog posts as needed
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

