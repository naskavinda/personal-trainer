"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";

const carouselImages = [
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/carousel-3.jpg",
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    duration: "per month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "2 training sessions per week",
      "Basic fitness assessment",
      "Personalized workout plan",
      "Basic nutrition guidelines",
      "Monthly progress tracking",
      "Email support within 24 hours",
      "Access to workout app",
      "Monthly body composition analysis"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    duration: "per month",
    description: "Ideal for dedicated fitness enthusiasts seeking serious results",
    features: [
      "3 training sessions per week",
      "Advanced fitness assessment",
      "Customized workout program",
      "Detailed nutrition plan",
      "Bi-weekly progress tracking",
      "Priority email & chat support",
      "Access to premium workout app",
      "Bi-weekly body composition analysis",
      "Supplement recommendations",
      "Recovery techniques guidance"
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$199",
    duration: "per month",
    description: "For those seeking maximum results and premium support",
    features: [
      "5 training sessions per week",
      "Comprehensive fitness assessment",
      "Fully customized workout program",
      "Advanced nutrition & meal planning",
      "Weekly progress tracking",
      "24/7 priority support",
      "Premium app with exclusive content",
      "Weekly body composition analysis",
      "Personalized supplement plan",
      "Recovery & mobility program",
      "Lifestyle & stress management",
      "Group fitness classes included"
    ],
    highlight: false,
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Carousel */}
      <section className="w-full h-screen relative overflow-hidden -mt-20">
        {carouselImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
            className={`transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Transforming Lives, One Rep at a Time
          </h1>
          <p className="text-xl mb-8 text-center">
            Your journey to a better you starts here
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={prevImage}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={nextImage}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-16 bg-secondary text-secondary-foreground w-full scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Transform your life with our specialized fitness programs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Personal Training</CardTitle>
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
                <p>One-on-one sessions tailored to your goals</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services#personal-training">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Custom Meal Plans</CardTitle>
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
                <p>Nutrition guidance to fuel your transformation</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services#meal-plans">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Online Coaching</CardTitle>
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
                <p>Expert guidance, anywhere in the world</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services#online-coaching">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 w-full bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Pricing Plans</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Choose the perfect plan for your fitness journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name}
                className={cn(
                  "relative hover:shadow-lg transition-all duration-300",
                  plan.highlight && "border-primary shadow-md scale-105"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 w-full bg-muted text-muted-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Expert Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <Image
                  src="/john-doe.jpg"
                  alt="John Doe"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full"
                />
                <CardTitle className="mt-4">John Doe</CardTitle>
                <CardDescription>Bodybuilding & Strength Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p>With over 10 years of experience in bodybuilding, John has helped hundreds of clients achieve their dream physique.</p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4">
                <Link href="https://facebook.com/johndoe" target="_blank" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com/johndoe" target="_blank" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/johndoe" target="_blank" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Image
                  src="/jane-smith.jpg"
                  alt="Jane Smith"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full"
                />
                <CardTitle className="mt-4">Jane Smith</CardTitle>
                <CardDescription>Nutrition & Weight Loss</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Jane is a certified nutritionist with a passion for helping clients transform their bodies through proper diet and exercise.</p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4">
                <Link href="https://facebook.com/janesmith" target="_blank" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com/janesmith" target="_blank" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/janesmith" target="_blank" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Image
                  src="/mike-johnson.jpg"
                  alt="Mike Johnson"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full"
                />
                <CardTitle className="mt-4">Mike Johnson</CardTitle>
                <CardDescription>Functional Fitness & Rehabilitation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Mike specializes in helping clients recover from injuries and improve their overall functional fitness.</p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4">
                <Link href="https://facebook.com/mikejohnson" target="_blank" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com/mikejohnson" target="_blank" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/mikejohnson" target="_blank" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/trainers">View All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
