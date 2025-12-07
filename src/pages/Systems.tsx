import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Systems: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-terra-700 sm:text-5xl font-heading">
            Engineered for Adventure
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore our three distinct park systems, each designed for specific terrains and business models.
          </p>
        </div>
      </div>

      {/* Treetop System */}
      <section id="treetop" className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-terra-100 text-terra-800 text-sm font-bold mb-4">
                Nature Integrated
              </span>
              <h2 className="text-3xl font-bold text-terra-700 font-heading mb-6">
                Treetop Adventures
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our flagship system utilizes existing forest canopy to create immersive aerial experiences. Using our patented "Tree-Hugger" mounting technology, we ensure zero damage to the trees, allowing the park to grow with the forest. Ideal for eco-resorts, state parks, and nature reserves.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Tree-health First Design: No bolts penetrate the tree trunk.",
                  "Low Environmental Impact: Minimal ground disturbance.",
                  "Seasonal Aesthetic: Beautiful in summer lushness or autumn colors.",
                  "Modular Difficulty: Courses range from kids' nets to extreme ninja runs."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-terra-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact">
                <Button>Get a Quote for Treetop</Button>
              </Link>
            </div>
            <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1533575975071-0498a96b7617?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Treetop platform in dense forest" />
              <img src="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Zip line through the trees" />
            </div>
          </div>
        </div>
      </section>

      {/* Adrenaline System */}
      <section id="adrenaline" className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
             <div className="order-2 lg:order-1 mt-10 lg:mt-0">
               <div className="relative">
                <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-xl w-full object-cover" alt="Large scale high ropes structure" />
                <div className="absolute -bottom-6 -right-6 bg-terra-500 p-6 rounded-xl hidden md:block shadow-lg">
                  <p className="text-white font-bold text-xl">High Capacity.<br/>High Return.</p>
                </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-800 text-sm font-bold mb-4">
                High Intensity
              </span>
              <h2 className="text-3xl font-bold text-terra-700 font-heading mb-6">
                Adrenaline Parks
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No trees? No problem. Our pole-based Adrenaline Parks are built on massive, self-supporting timber or steel structures. This allows for vertical density—stacking multiple levels of obstacles in a small footprint. Perfect for urban centers, ski resorts in summer, and flat terrain.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Terrain Independent: Build on concrete, grass, or sand.",
                  "High Throughput: Design allows for maximum visitors per hour.",
                  "Centralized Supervision: Easier for staff to monitor participants.",
                  "Integrated Attractions: Add giant swings, drop jumps, and climbing walls."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-terra-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact">
                <Button variant="primary">Get a Quote for Adrenaline</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile System */}
      <section id="mobile" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-terra-100 text-terra-800 text-sm font-bold mb-4">
                Rapid Deployment
              </span>
              <h2 className="text-3xl font-bold text-terra-700 font-heading mb-6">
                Mobile Parks
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Capitalize on the event economy with our Mobile Park system. Designed to fit on standard trailers, these courses can be set up by a small crew in hours. They serve as excellent marketing tools, festival attractions, or seasonal installations in city squares.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Fast Setup: From trailer to adventure in under 6 hours.",
                  "Modular Layout: Configurable for different footprint sizes.",
                  "High Visibility: Bright, attractive designs that draw crowds.",
                  "Revenue Generator: Pay-per-play model ideal for high foot traffic."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-terra-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact">
                <Button variant="primary">Get a Quote for Mobile</Button>
              </Link>
            </div>
            <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-4">
               <div className="col-span-2">
                 <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Mobile park outdoor setup" />
               </div>
               <img src="https://images.unsplash.com/photo-1612454645229-253c559ce9a8?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Kids playing on mobile structure" />
               <img src="https://images.unsplash.com/photo-1605548230624-8d2d0419c517?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Event setup activity" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <div className="bg-gray-900 text-center py-12">
        <p className="text-gray-300 mb-4">Not sure which system is right for you?</p>
        <Link to="/contact" className="text-white text-lg font-bold hover:text-terra-400 transition-colors flex items-center justify-center">
          Schedule a Discovery Call <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};
