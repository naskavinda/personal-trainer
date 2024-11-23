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
    description: "Perfect for beginners",
    features: [
      "1 training session per week",
      "Basic meal plan",
      "Email support",
    ],
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
    ],
  },
  {
    name: "Elite",
    price: "$199",
    duration: "per month",
    description: "For those seeking maximum results",
    features: [
      "5 training sessions per week",
      "Personalized meal plan",
      "24/7 priority support",
    ],
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
      <section className="w-full h-[80vh] relative overflow-hidden">
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
      <section className="py-16 bg-secondary text-secondary-foreground w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 w-full bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">{plan.price}</span>{" "}
                    {plan.duration}
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">View Full Pricing Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Transformation */}
      <section className="py-16 w-full bg-muted text-muted-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Transformation
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/placeholder.svg?height=400&width=300&text=Before"
              alt="Before Transformation"
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?height=400&width=300&text=After"
              alt="After Transformation"
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="text-center mt-8">
            <p className="text-xl mb-4 italic">
              &quot;I never thought I could achieve this. Thanks to [Your Name],
              I&apos;m in the best shape of my life!&quot;
            </p>
            <Button asChild size="lg">
              <Link href="/transformations">See More Transformations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
