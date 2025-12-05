import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Zap, Truck } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small timeout to ensure DOM is ready for transition
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main 
              className={`mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 transition-all duration-1000 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-terra-700 sm:text-5xl md:text-6xl font-heading">
                  <span className="block xl:inline">TerraFit Parks</span>{' '}
                  <span className="block text-gray-900 mt-2 text-3xl sm:text-4xl md:text-5xl">Build Thrills. Grow Profits.</span>
                </h1>
                <p className="mt-5 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We are the leading provider of turnkey, scalable adventure park systems. Partner with us to design, build, and launch your own profitable park, from a simple starter course to a magisterial destination.
                </p>
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                  <Link to="/partnership">
                    <Button variant="primary" className="w-full sm:w-auto h-14 text-lg">
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link to="/systems">
                    <Button variant="outline" className="w-full sm:w-auto h-14 text-lg">
                      Explore Systems
                    </Button>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div 
          className={`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 transition-all duration-1000 delay-300 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1596323638248-e87e14d18729?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="People enjoying a treetop adventure course"
          />
        </div>
      </section>

      {/* Systems Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-terra-700 sm:text-4xl font-heading">
              Three Systems, Infinite Possibilities
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose the perfect fit for your terrain, budget, and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Treetop - Vevrca Style */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1596323638242-d6b07bd02d08?auto=format&fit=crop&w=800&q=80" 
                  alt="Treetop Adventure - Forest Integration" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-terra-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-terra-500 p-2 rounded-full text-white z-10">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-terra-700 mb-3 font-heading">Treetop Adventures</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Eco-friendly courses built harmoniously among trees. Our patented system protects tree health while delivering an unforgettable experience.
                </p>
                <Link to="/systems" className="text-terra-600 font-semibold flex items-center hover:text-terra-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Adrenaline - ZUPI Style */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?auto=format&fit=crop&w=800&q=80" 
                  alt="Adrenaline Park - Structural Engineering" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-terra-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-terra-500 p-2 rounded-full text-white z-10">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-terra-700 mb-3 font-heading">Adrenaline Parks</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  High-capacity, pole-based thrill parks. Build on any terrain for maximum flexibility, intensity, and throughput.
                </p>
                <Link to="/systems" className="text-terra-600 font-semibold flex items-center hover:text-terra-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Mobile - Event Style */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1571752726703-4e709e3e4df8?auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile Park - Kids Adventure" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-terra-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-terra-500 p-2 rounded-full text-white z-10">
                  <Truck className="h-6 w-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-terra-700 mb-3 font-heading">Mobile Parks</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Your pop-up profit center. Perfect for events, festivals, and temporary locations. Fast to deploy, highly profitable.
                </p>
                <Link to="/systems" className="text-terra-600 font-semibold flex items-center hover:text-terra-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-terra-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-heading mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-terra-100 mb-10 max-w-3xl mx-auto">
            From initial feasibility to grand opening, we are your partner in building a world-class adventure destination.
          </p>
          <Link to="/contact">
            <Button variant="white" className="h-14 px-10 text-lg font-bold">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};