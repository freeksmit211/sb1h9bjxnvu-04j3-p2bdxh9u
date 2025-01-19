import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function NutritionPlanning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "Muscle Building Meal Plan",
      price: "R370",
      period: "once-off",
      features: [
        "Basic calorie calculated diet",
        "Simple macro breakdown",
        "Basic nutrition guidelines",
        "Meal timing suggestions",
        "Basic supplement recommendations"
      ]
    },
    {
      title: "1200 Calorie Meal Plan",
      price: "R370",
      period: "once-off",
      features: [
        "Calorie-controlled meal plan",
        "Balanced macro distribution",
        "Portion control guide",
        "Meal timing schedule",
        "Hunger management tips"
      ]
    },
    {
      title: "Cleanse Nutrition",
      price: "R370",
      period: "once-off",
      features: [
        "Detox meal planning",
        "Anti-inflammatory foods",
        "Digestive health guide",
        "Hydration schedule",
        "Cleanse protocol"
      ]
    },
    {
      title: "Athletic Performance",
      price: "R490",
      period: "once-off",
      features: [
        "Sport-specific nutrition",
        "Pre/post workout meals",
        "Performance supplements",
        "Energy system support",
        "Training phase diet",
        "Recovery nutrition"
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

        <h1 className="text-4xl font-bold text-center mb-16">Nutrition Plans</h1>

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