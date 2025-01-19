import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function PersonalTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "Starter Pack",
      price: "R3300",
      period: "/month",
      duration: "12 Sessions (3 per week)",
      features: [
        "Initial fitness assessment",
        "Personalized workout plans",
        "Form correction and technique guidance",
        "Progress tracking",
        "Nutrition tips",
        "WhatsApp support between sessions"
      ]
    },
    {
      title: "Transformation Pack",
      price: "R4500",
      period: "/month",
      duration: "16 Sessions (4 per week)",
      features: [
        "Comprehensive fitness assessment",
        "Customized workout programming",
        "Detailed form and technique coaching",
        "Regular progress measurements",
        "Basic nutrition plan",
        "Priority WhatsApp support",
        "Monthly body composition analysis"
      ]
    },
    {
      title: "Elite Pack",
      price: "R5600",
      period: "/month",
      duration: "20 Sessions (5 per week)",
      features: [
        "Advanced fitness assessment",
        "Premium workout programming",
        "Expert technique coaching",
        "Weekly progress tracking",
        "Detailed nutrition planning",
        "24/7 WhatsApp support",
        "Bi-weekly body composition analysis",
        "Recovery protocols",
        "Supplement guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-green-500 hover:text-green-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-center mb-16">Personal Training Packages</h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ProductCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              duration={plan.duration}
              features={plan.features}
              pricePerSession="R280 per session"
            />
          ))}
        </div>
      </div>
    </div>
  );
}