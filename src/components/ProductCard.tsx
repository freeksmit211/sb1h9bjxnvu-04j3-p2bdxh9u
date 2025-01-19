import React, { useState } from 'react';
import { Check } from 'lucide-react';
import ContactModal from './ContactModal';

interface ProductCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  duration?: string;
  pricePerSession?: string;
}

export default function ProductCard({ 
  title, 
  price, 
  period, 
  features, 
  duration, 
  pricePerSession 
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
        <div className="p-8 flex-grow">
          <h3 className="text-2xl font-bold h-[60px] flex items-center">{title}</h3>
          <div className="h-[100px] flex flex-col justify-center">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-green-500">{price}</span>
              <span className="text-gray-500 ml-1">{period}</span>
            </div>
            {duration && <p className="text-lg text-gray-600">{duration}</p>}
            {pricePerSession && <p className="text-md text-gray-500">{pricePerSession}</p>}
          </div>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 bg-gray-50">
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productTitle={title}
      />
    </>
  );
}