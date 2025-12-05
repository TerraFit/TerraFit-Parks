import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Check, TrendingUp, DollarSign, Users, Mountain, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '../components/Button';

export const InvestmentGuide: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Document Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl my-10 overflow-hidden">
        
        {/* COVER PAGE */}
        <div className="bg-terra-800 text-white p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <Trees className="w-full h-full text-white" />
          </div>
          <div className="relative z-10 border-4 border-terra-400 p-10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight">INVESTMENT GUIDE</h1>
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-12 text-terra-200">2025 Prospectus</p>
            
            <div className="inline-block bg-white text-terra-900 px-8 py-3 font-bold text-xl uppercase tracking-wider mb-12">
              TerraFit Parks
            </div>
            
            <p className="text-terra-300 font-heading text-lg">Build Thrills. Grow Profits.</p>
          </div>
        </div>

        {/* PAGE 1: EXECUTIVE SUMMARY */}
        <div className="p-16 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-8 text-terra-600">
            <span className="font-bold tracking-widest uppercase text-xs">01 // Executive Summary</span>
          </div>
          
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8">The Adventure Economy</h2>
          
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              The global tourism market is shifting. Modern travelers and local communities alike are moving away from passive observation toward active participation. They seek experiences that challenge them, connect them with nature, and provide shareable moments.
            </p>
            <p className="mb-6">
              <strong>TerraFit Parks</strong> stands at the forefront of this shift. As a subsidiary of the <strong>Aemara Group</strong>, we deliver turnkey adventure park solutions that combine thrill with uncompromising safety and profitability.
            </p>
            <p>
              By partnering with Slovenian engineering giants <strong>ZUPI</strong> and <strong>Vevrca</strong>, we bring decades of European alpine expertise to the global market. Our structures are not just playgrounds; they are engineered assets designed for high throughput, low maintenance, and rapid ROI.
            </p>
          </div>
        </div>

        {/* PAGE 2: TECHNOLOGY & ENGINEERING */}
        <div className="p-16 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-8 text-terra-600">
            <span className="font-bold tracking-widest uppercase text-xs">02 // Engineering Excellence</span>
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Innovation in Nature</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-terra-700 mb-4 flex items-center gap-2">
                <Trees className="h-5 w-5" />
                Patented Tree-HuggerClips®
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our proprietary mounting system is the heart of our Treetop packages. Unlike traditional builds that use invasive bolts which damage timber and reduce tree lifespan, the Tree-HuggerClips® use tension and friction.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex gap-2"><Check className="h-4 w-4 text-terra-500"/> Zero penetration of the tree trunk</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-terra-500"/> Allows for natural tree growth</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-terra-500"/> Fully adjustable and removable</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-terra-700 mb-4 flex items-center gap-2">
                <Mountain className="h-5 w-5" />
                Slovenian Craftsmanship
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our partners, ZUPI and Vevrca, operate in the heart of the Julian Alps. Every component is tested against extreme weather conditions, ensuring your park remains operational and safe whether installed in a humid tropical resort or a snowy mountain town.
              </p>
            </div>
          </div>
        </div>

        {/* PAGE 3: INVESTMENT PACKAGES */}
        <div className="p-16 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-8 text-terra-600">
            <span className="font-bold tracking-widest uppercase text-xs">03 // Financial Models</span>
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Investment Packages</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We offer four distinct tiers of entry, each designed for specific operational goals and terrain types.
          </p>

          {/* Package 1 */}
          <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">1. The "Pop-Up Profit" (Mobile Park)</h3>
              <span className="bg-terra-500 text-xs font-bold px-2 py-1 rounded">STARTER</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="text-sm text-gray-600 mb-4">
                  Enter the adventure market with a low-risk, high-reward model. This mobile package features 9 engaging obstacles, each 5 meters long at a family-friendly 1.6-meter height. Its rapid-deployment design is the ultimate revenue generator for events.
                </p>
                <div className="flex gap-2 text-xs font-bold text-gray-500 uppercase">
                  <span>Ideally For:</span>
                  <span className="text-gray-900">Festivals, Malls, Activations</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded text-center">
                <p className="text-xs text-gray-500 uppercase">Investment From</p>
                <p className="text-2xl font-bold text-terra-700">R 1,000,000</p>
              </div>
            </div>
          </div>

          {/* Package 2 */}
          <div className="mb-12 border-2 border-terra-500 rounded-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-terra-500 text-white text-xs font-bold px-3 py-1">FLAGSHIP</div>
            <div className="bg-terra-50 p-4">
              <h3 className="font-bold text-lg text-terra-800">2. The "Forest Canopy" (Treetop Adventure)</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6">
                Our flagship eco-adventure. Includes three distinct courses with 12 obstacles each, nestled 5 to 15 meters high in the canopy, plus two zip lines. Uses Tree-HuggerClips® technology.
              </p>
              
              <div className="bg-gray-900 text-white rounded-lg p-6">
                <h4 className="text-terra-400 text-xs font-bold uppercase mb-4 border-b border-gray-700 pb-2">Projected Financial Performance</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-gray-400 text-xs uppercase mb-1">Capacity</div>
                    <div className="font-bold">60 Pax</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase mb-1">Daily Traffic</div>
                    <div className="font-bold">240 Pax</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase mb-1">Ticket Price</div>
                    <div className="font-bold">R280 - R360</div>
                  </div>
                  <div>
                    <div className="text-terra-300 text-xs uppercase mb-1">Daily Revenue</div>
                    <div className="font-bold text-terra-300">R67k - R86k</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500 uppercase font-bold">Investment From</span>
                <span className="text-3xl font-bold text-terra-700">R 3,000,000</span>
              </div>
            </div>
          </div>

          {/* Package 3 */}
          <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4">
              <h3 className="font-bold text-lg text-gray-800">3. The "Urban Thrill" (Adrenaline Park)</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6">
                Maximize thrills on any terrain. This pole-based park features three intense courses with 12 obstacles each (5-15m high). Flexible, high-capacity design ideal for resorts and urban centers.
              </p>
              
              <div className="bg-gray-100 text-gray-800 rounded-lg p-6 mb-6">
                 <h4 className="text-terra-700 text-xs font-bold uppercase mb-4 border-b border-gray-300 pb-2">Projected Financial Performance</h4>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-gray-500 text-xs uppercase mb-1">Capacity</div>
                    <div className="font-bold">60 Pax</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase mb-1">Daily Traffic</div>
                    <div className="font-bold">240 Pax</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase mb-1">Ticket Price</div>
                    <div className="font-bold">R280 - R360</div>
                  </div>
                  <div>
                    <div className="text-terra-700 text-xs uppercase mb-1">Daily Revenue</div>
                    <div className="font-bold text-terra-700">R67k - R86k</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500 uppercase font-bold">Investment From</span>
                <span className="text-3xl font-bold text-terra-700">R 3,800,000</span>
              </div>
            </div>
          </div>

          {/* Package 4 */}
          <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">4. The "Valley Flyer" (Zip Line Add-On)</h3>
              <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded">ADD-ON</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="text-sm text-gray-600 mb-4">
                  Amplify your park's appeal and revenue. This add-on features five powerful zip lines, each up to 300 meters long, designed to traverse valleys or span between trees.
                </p>
                <div className="flex gap-2 text-xs font-bold text-gray-500 uppercase">
                  <span>Ideal For:</span>
                  <span className="text-gray-900">Flagship Attractions, Large Resorts</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded text-center">
                <p className="text-xs text-gray-500 uppercase">Investment From</p>
                <p className="text-2xl font-bold text-terra-700">R 2,400,000</p>
              </div>
            </div>
          </div>

          {/* Package 5: NEW Group Racer */}
          <div className="mb-12 border border-gray-800 bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="bg-yellow-500 text-gray-900 p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">5. The "Group Racer" (Multi-Line Experience)</h3>
              <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">HIGH CAPACITY</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="text-sm text-gray-300 mb-4">
                  Unlock the ultimate group thrill. 2-6 parallel zip lines create unforgettable social moments and friendly competition. This system maximizes throughput and drives viral social media marketing.
                </p>
                <div className="flex gap-2 text-xs font-bold text-gray-400 uppercase">
                  <span>Ideal For:</span>
                  <span className="text-white">High-Volume Parks, Team Building</span>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <p className="text-xs text-gray-400 uppercase">Investment From</p>
                <p className="text-2xl font-bold text-yellow-500">Custom Quote</p>
                <p className="text-[10px] text-gray-500 mt-1">Typically > R 1,800,000</p>
              </div>
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="bg-terra-50 border-l-4 border-terra-500 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-terra-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-terra-800 text-lg mb-2">Pro Tip for Profitability</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Combining a <strong>Forest Canopy</strong> or <strong>Urban Thrill</strong> package with a <strong>Group Racer</strong> zip line creates the ultimate high-capacity adventure park. This configuration caters to both the immersive course enthusiast and the thrill-seeking group, maximizing your market appeal and daily revenue potential.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BACK PAGE / CONTACT */}
        <div className="bg-gray-900 text-white p-16 text-center">
          <Trees className="h-16 w-16 text-terra-500 mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Build?</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Take the next step in your investment journey. Schedule a feasibility consultation with our team today.
          </p>
          
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-lg mx-auto mb-12">
            <div>
               <p className="text-xs text-gray-500 uppercase mb-1">Email Us</p>
               <p className="font-bold text-lg">partners@terrafitparks.com</p>
            </div>
            <div>
               <p className="text-xs text-gray-500 uppercase mb-1">Visit Online</p>
               <p className="font-bold text-lg">www.terrafitparks.com</p>
            </div>
          </div>

          <Link to="/contact">
            <Button variant="primary" className="px-12 py-4 text-lg">
              Book Your Consultation
            </Button>
          </Link>

          <p className="text-xs text-gray-600 mt-12">
            © 2025 TerraFit Parks. A subsidiary of Aemara Group. All financial projections are estimates based on optimal operating conditions and are not guaranteed.
          </p>
        </div>

      </div>
      
      {/* Floating Web Nav Helper */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 text-center lg:hidden">
        <Link to="/partnership" className="text-terra-600 font-bold text-sm flex items-center justify-center gap-2">
           <ArrowRight className="h-4 w-4 rotate-180" /> Back to Website
        </Link>
      </div>
    </div>
  );
};