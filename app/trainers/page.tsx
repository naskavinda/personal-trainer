import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Medal, Award, Trophy, Users, Clock, Dumbbell } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const trainers = [
  {
    name: "John Doe",
    title: "Senior Fitness Coach",
    specialization: "Bodybuilding & Strength Training",
    experience: "12+ years",
    bio: "With over a decade of experience in bodybuilding and strength training, John has helped hundreds of clients achieve their dream physique. His methodical approach combines traditional bodybuilding principles with modern training techniques.",
    achievements: [
      "IFBB Pro Card Holder",
      "3x National Bodybuilding Champion",
      "Certified Strength & Conditioning Specialist (CSCS)",
      "Over 500 successful client transformations"
    ],
    certifications: [
      "National Academy of Sports Medicine (NASM) Certified",
      "International Sports Sciences Association (ISSA) Master Trainer",
      "Precision Nutrition Level 2 Coach"
    ],
    specialties: [
      "Competition Prep",
      "Muscle Building",
      "Strength Training",
      "Body Recomposition"
    ],
    clientCount: "500+",
    image: "/john-doe.jpg",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    title: "Head Nutrition Coach",
    specialization: "Nutrition & Weight Loss",
    experience: "8+ years",
    bio: "Jane is a certified nutritionist and weight loss specialist who believes in sustainable, long-term approaches to health and fitness. Her evidence-based nutrition programs have helped clients not just lose weight, but keep it off permanently.",
    achievements: [
      "Featured in Women's Health Magazine",
      "Published Author - 'Eat Right, Train Better'",
      "Helped clients lose over 5000 lbs collectively",
      "Weight Loss Specialist of the Year 2022"
    ],
    certifications: [
      "Registered Dietitian Nutritionist (RDN)",
      "Certified Sports Nutritionist",
      "ACE Certified Personal Trainer"
    ],
    specialties: [
      "Weight Loss",
      "Meal Planning",
      "Sports Nutrition",
      "Diabetes Management"
    ],
    clientCount: "300+",
    image: "/jane-smith.jpg",
    socialMedia: {
      facebook: "https://facebook.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Mike Johnson",
    title: "Rehabilitation Specialist",
    specialization: "Functional Fitness & Rehabilitation",
    experience: "15+ years",
    bio: "Mike combines his background in physical therapy with strength training to help clients recover from injuries and build resilient, functional bodies. His unique approach focuses on both rehabilitation and performance enhancement.",
    achievements: [
      "Former Olympic Team Physical Therapist",
      "Developed Recovery Protocol for Pro Athletes",
      "Featured Speaker at Fitness Conferences",
      "Sports Medicine Excellence Award 2023"
    ],
    certifications: [
      "Doctor of Physical Therapy (DPT)",
      "Functional Movement Systems (FMS) Level 3",
      "Certified Athletic Trainer (ATC)"
    ],
    specialties: [
      "Injury Rehabilitation",
      "Movement Assessment",
      "Pain Management",
      "Athletic Performance"
    ],
    clientCount: "1000+",
    image: "/mike-johnson.jpg",
    socialMedia: {
      facebook: "https://facebook.com/mikejohnson",
      instagram: "https://instagram.com/mikejohnson",
      twitter: "https://twitter.com/mikejohnson"
    }
  }
]

export default function Trainers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Expert Trainers, Real Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified trainers bring years of experience and proven expertise to help you achieve your fitness goals. Meet the team that will transform your life.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">35+</h3>
            <p className="text-muted-foreground">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">1800+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">35+</h3>
            <p className="text-muted-foreground">Years Combined Experience</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-muted-foreground">Specializations</p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{trainer.name}</CardTitle>
                <div className="text-primary font-semibold mb-2">{trainer.title}</div>
                <CardDescription className="text-lg">{trainer.specialization}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Experience:</span> {trainer.experience}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Clients Trained:</span> {trainer.clientCount}
                  </div>
                  <p className="text-muted-foreground mb-6">{trainer.bio}</p>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {trainer.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Medal className="h-5 w-5 text-primary" />
                    Certifications
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <div className="flex justify-center space-x-4">
                  <Link 
                    href={trainer.socialMedia.facebook} 
                    target="_blank" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link 
                    href={trainer.socialMedia.instagram} 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link 
                    href={trainer.socialMedia.twitter} 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Train with {trainer.name.split(" ")[0]}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
