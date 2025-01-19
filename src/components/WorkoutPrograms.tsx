import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function WorkoutPrograms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "Basic Workout Plan",
      price: "R370",
      period: "once-off",
      features: [
        "3-5 day workout plan",
        "Basic exercise selection",
        "Simple progression scheme",
        "Exercise technique guidelines",
        "Basic training principles",
        "Suitable for beginners"
      ]
    },
    {
      title: "Customized Workout Plan",
      price: "R490",
      period: "once-off",
      features: [
        "Personalized workout plan",
        "Customized exercise selection",
        "Advanced progression methods",
        "Detailed form instructions",
        "Recovery protocols",
        "Equipment adaptations",
        "All fitness levels"
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

        <h1 className="text-4xl font-bold text-center mb-16">Workout Programs</h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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