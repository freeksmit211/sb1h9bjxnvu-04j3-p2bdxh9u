import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function OnlineCoaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "Starter Pack",
      price: "R790",
      period: "/month",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance",
        "Weekly check-ins",
        "Form check videos",
        "WhatsApp support"
      ]
    },
    {
      title: "Personalized Starter Pack",
      price: "R970",
      period: "/month",
      features: [
        "Fully personalized workout plan",
        "Customized nutrition guidance",
        "Weekly check-ins",
        "Detailed form check videos",
        "Dedicated WhatsApp support"
      ]
    },
    {
      title: "12 Week Program",
      price: "R1990",
      period: "once-off",
      features: [
        "12-week workout programming",
        "Customized nutrition planning",
        "Weekly check-ins",
        "Detailed progress tracking",
        "Recovery protocols",
        "Priority support",
        "Program adjustments as needed"
      ]
    },
    {
      title: "Personalized 12 Week Program",
      price: "R1990",
      period: "once-off",
      features: [
        "Fully personalized 12-week programming",
        "Custom nutrition plan tailored to you",
        "Weekly one-on-one check-ins",
        "In-depth progress tracking",
        "Personalized recovery protocols",
        "Priority support access",
        "Program adjustments based on your progress"
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

        <h1 className="text-4xl font-bold text-center mb-16">Online Coaching Programs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ProductCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}