import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const trainers = [
  {
    name: "John Doe",
    specialization: "Bodybuilding & Strength Training",
    bio: "With over 10 years of experience in bodybuilding, John has helped hundreds of clients achieve their dream physique.",
    image: "/john-doe.jpg?height=400&width=300&text=John+Doe",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    specialization: "Nutrition & Weight Loss",
    bio: "Jane is a certified nutritionist with a passion for helping clients transform their bodies through proper diet and exercise.",
    image: "/jane-smith.jpg?height=400&width=300&text=Jane+Smith",
    socialMedia: {
      facebook: "https://facebook.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Mike Johnson",
    specialization: "Functional Fitness & Rehabilitation",
    bio: "Mike specializes in helping clients recover from injuries and improve their overall functional fitness.",
    image: "/mike-johnson.jpg?height=400&width=300&text=Mike+Johnson",
    socialMedia: {
      facebook: "https://facebook.com/mikejohnson",
      instagram: "https://instagram.com/mikejohnson",
      twitter: "https://twitter.com/mikejohnson"
    }
  }
]

export default function Trainers() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={300}
                height={400}
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <CardTitle>{trainer.name}</CardTitle>
              <CardDescription>{trainer.specialization}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{trainer.bio}</p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <Link href={trainer.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={trainer.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href={trainer.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

