"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/personal-training.jpg"
          alt="Contact Us"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto">Ready to transform your life? We're here to guide you every step of the way towards your fitness goals.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="prose">
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground">Whether you're looking to start your fitness journey or have questions about our programs, we're here to help.</p>
            </div>

            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p>123 Fitness Street</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p>(212) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p>info@lifechanegym.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-foreground/10 p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p>Mon - Fri: 6:00 AM - 10:00 PM</p>
                    <p>Sat - Sun: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-6">
                <div className="w-full">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://facebook.com" target="_blank" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-7 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your fitness goals..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
