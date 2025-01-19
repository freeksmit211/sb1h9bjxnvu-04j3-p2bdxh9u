import React from 'react';
import { Award, Users, Clock, Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Niel</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="h-full">
            <div className="h-full relative">
              <img
                src="https://storage.googleapis.com/websitenielimages/images/WhatsApp%20Image%202025-01-19%20at%2012.20.45.jpeg"
                alt="Personal Trainer"
                className="rounded-lg shadow-xl w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">My Story</h3>
              <div className="space-y-6 text-gray-600">
                <p>
                  Hi, I'm Niel—a personal trainer and online coach dedicated to helping you take charge of your fitness journey.
                </p>
                <p>
                  At 16, I faced a turning point in my life after losing my father to a heart attack. That moment inspired me to take control of my health and sparked a lifelong passion for fitness. Over the years, this passion has grown into my purpose: empowering others to transform their lives, just as I transformed mine.
                </p>
                <p>
                  With 14 years of experience, including 4 years as a global trainer aboard luxury cruise ships, I've had the privilege of helping clients worldwide achieve their goals, regain confidence, and unlock their full potential. Now, it's your turn.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">What We Do at Real Fitness</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-base mb-1">Personalized</h5>
                    <p className="text-sm text-gray-600">Your journey is unique, and your plan will be too.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-base mb-1">Backed by Expertise</h5>
                    <p className="text-sm text-gray-600">With global experience and proven results, you're in trusted hands.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-base mb-1">Sustainable</h5>
                    <p className="text-sm text-gray-600">Achieve lasting results with a balanced approach that fits your life.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-base mb-1">Life-Changing</h5>
                    <p className="text-sm text-gray-600">From managing conditions like high blood pressure, cholesterol, or diabetes to feeling stronger and more confident, we're here to help you thrive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icons at bottom */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Certified</h4>
              <p className="text-gray-600">Professional Training</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Global</h4>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">14+ Years</h4>
              <p className="text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}