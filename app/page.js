"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  CheckCircle,
  Star,
  Graph,
  CheckCheck,
  StarIcon,
  GitGraph,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Personalized Questions",
      description:
        "Get tailored interview questions based on your job position, tech stack, and experience.",
      icon: <CheckCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive instant feedback and ratings on your interview answers.",
      icon: <StarIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Track Progress",
      description:
        "Review and retake previous interviews to track your improvement.",
      icon: <GitGraph className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 min-h-96">
        <div className="flex justify-between items-center px-10">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <Button
            onClick={() => router.replace("/dashboard")}
            variant="outline"
            className="bg-white text-blue-600 rounded-full"
          >
            Sign In
          </Button>
        </div>
        <div className="container mx-auto px-4 text-center mt-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Ionic Mocki AI</h1>
          <p className="text-lg mb-6">
            Prepare for your next job interview with tailored questions and
            feedback.
          </p>
          <Button
            onClick={() => router.replace("/dashboard")}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-col items-center">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">
                “The AI Mock Interview helped me prepare thoroughly and boosted
                my confidence!”
              </p>
              <footer className="text-gray-600">
                — John Doe, Software Engineer
              </footer>
            </blockquote>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg mb-6">
            Sign up now and start preparing for your next interview today.
          </p>
          <Button
            onClick={() => router.replace("/dashboard")}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign Up
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ionic Mocki AI. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
