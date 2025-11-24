import React from 'react'
import { Zap } from 'lucide-react'

function Hero() {
  return (
    <section className="py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Unlock Data Insights with Our Dashboard
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl leading-relaxed animate-fade-in delay-100">
            Transform raw data into actionable intelligence. Our intuitive dashboard empowers you to monitor KPIs, identify trends, and make data-driven decisions, all in real-time.
          </p>
          <div className="mt-8 space-x-4 animate-fade-in delay-200">
            <a
              href="#"
              className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl text-primary-foreground"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="border-2 border-gray-300 hover:border-primary px-8 py-4 rounded-xl text-lg"
              aria-label="Learn More"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1551288049-eee1e576ff9d?w=800&h=600"
            alt="Data Visualization"
            className="rounded-xl shadow-2xl relative animate-fade-in delay-100"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
