import React from 'react'
import { Zap, Shield, TrendingUp, LayoutDashboard, BarChart, User } from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Real-Time Monitoring',
    description: 'Stay ahead with live data updates, ensuring you never miss a critical change. Monitor KPIs and make informed decisions instantly.',
  },
  {
    icon: BarChart,
    title: 'Interactive Visualizations',
    description: 'Explore your data with dynamic charts and graphs, offering a deeper understanding of trends and patterns.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Anticipate future trends with our advanced forecasting tools, empowering you to plan and optimize your strategies effectively.',
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'Protect your sensitive information with our robust security measures, ensuring your data remains confidential and compliant.',
  },
  {
    icon: User,
    title: 'Customizable Dashboards',
    description: 'Tailor your dashboard to meet your unique needs, focusing on the metrics that matter most to your business.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast Performance',
    description: 'Experience lightning-fast loading times and seamless interactions, providing you with an efficient and enjoyable user experience.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Power Up Your Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-secondary rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in delay-100"
          >
            <feature.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true"/>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
