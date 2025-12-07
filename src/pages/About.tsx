import React from 'react';
import { Mountain, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80" 
            alt="Julian Alps Mountains" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl font-heading">
            Engineered by Excellence,<br/>Built for Adventure
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        
        {/* Intro */}
        <div className="prose prose-lg text-gray-600 mb-16 mx-auto text-center">
          <p className="text-2xl font-light text-terra-700 leading-relaxed">
            "TerraFit Parks is a proud partnership, bringing together North American vision and decades of Slovenian engineering excellence from our partners, ZUPI and Vevrca."
          </p>
        </div>

        {/* The Partnership Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
           <div>
             <h3 className="text-2xl font-bold text-terra-700 font-heading mb-4">Empowering African Visionaries, Building Community Landmarks</h3>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Across Africa's dynamic cities and growing tourist hubs, communities seek safe, exciting, and profitable leisure activities. The Aemara Group, through TerraFit Parks, empowers local visionaries to fill this need.
             </p>
             <p className="text-gray-600 leading-relaxed">
               We bridge the gap by providing robust, low-maintenance adventure park systems that create jobs, foster family recreation, and become community landmarks. Our partnership combines Slovenian durability with a deep understanding of African markets, delivering not just attractions, but sustainable engines for local economic development.
             </p>
           </div>
           <div className="bg-gray-50 p-8 rounded-xl flex flex-col items-center justify-center space-y-8 border border-gray-100">
              {/* Logo Placeholders */}
              <div className="text-center">
                <div className="text-2xl font-black text-gray-400 tracking-widest border-2 border-gray-300 p-4 inline-block">ZUPI</div>
                <p className="text-xs text-gray-400 mt-2">Structural Engineering Partner</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gray-400 tracking-widest border-2 border-gray-300 p-4 inline-block">VEVRCA</div>
                <p className="text-xs text-gray-400 mt-2">Course Design Partner</p>
              </div>
           </div>
        </div>

        {/* Mission Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="bg-terra-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="h-6 w-6 text-terra-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Sustainable</h4>
            <p className="text-sm text-gray-600">We respect the environment, using techniques that protect tree health and local ecosystems.</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="bg-terra-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-terra-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Profitable</h4>
            <p className="text-sm text-gray-600">Our mission is to empower entrepreneurs. We design for throughput, safety, and operational efficiency.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="bg-terra-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-terra-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Thrilling</h4>
            <p className="text-sm text-gray-600">We don't build playgrounds; we build challenges that inspire confidence and joy in all ages.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
