import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Salad, Video, Clipboard } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-green-500" />,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      link: "/personal-training"
    },
    {
      icon: <Salad className="w-12 h-12 text-green-500" />,
      title: "Nutrition Planning",
      description: "Customized meal plans designed to complement your training and lifestyle.",
      link: "/nutrition-planning"
    },
    {
      icon: <Video className="w-12 h-12 text-green-500" />,
      title: "Online Coaching",
      description: "Remote training and support for clients anywhere in the world.",
      link: "/online-coaching"
    },
    {
      icon: <Clipboard className="w-12 h-12 text-green-500" />,
      title: "Workout Programs",
      description: "Structured 3-5 day workout plans to help you achieve your fitness goals.",
      link: "/workout-programs"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">The RF Way</h3>
          <p className="text-xl italic text-gray-600 mb-6">
            "You are a masterpiece—uniquely real. No need to compare, just grow and reveal."
          </p>
          <p className="text-lg text-gray-700">
            Are you ready to take the first step toward transforming your life? Let's make it happen together today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.link.startsWith('/') ? (
                <Link
                  to={service.link}
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  Learn More →
                </Link>
              ) : (
                <a
                  href={service.link}
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors inline-block"
          >
            Book a Session
          </button>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productTitle="General Inquiry"
        />
      </div>
    </section>
  );
}