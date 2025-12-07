import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Users, Ticket, TrendingUp, ArrowRight, Flag } from 'lucide-react';
import { Button } from '../components/Button';
import { ROICalculator } from '../components/ROICalculator';

const steps = [
  { title: "Feasibility Study", description: "We analyze your site's terrain, demographics, and market potential." },
  { title: "Concept Sketch", description: "Our designers create initial layouts to visualize the park flow and capacity." },
  { title: "Profitability Validation", description: "A detailed financial model projecting costs, capacity, and ROI." },
  { title: "Engineering & Plans", description: "Full structural engineering and architectural drawings for permitting." },
  { title: "Manufacturing", description: "Precision crafting of components in our European facilities." },
  { title: "Installation", description: "Our expert teams deploy to your site for rapid, safe assembly." },
  { title: "Staff Training", description: "We train your operators on safety protocols, rescue, and customer service." },
  { title: "Grand Opening", description: "Marketing support and final inspections to ensure a successful launch." },
  { title: "Maintenance Program", description: "Regular inspections and hardware updates to maintain safety standards." },
  { title: "10-Year Warranty", description: "Long-term partnership ensuring your park remains world-class." },
];

export const Partnership: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-gray-50 py-24 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-terra-700 sm:text-5xl font-heading">
            Your Blueprint for Local Success
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            A transparent pathway to empowerment, taking you from concept to a thriving community asset.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Timeline */}
        <div className="mb-24">
          <div className="relative border-l-4 border-terra-200 ml-4 md:ml-1/2 md:left-0 md:transform md:-translate-x-0.5 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[-1.3rem] md:left-1/2 md:-ml-3.5 bg-terra-500 h-7 w-7 rounded-full border-4 border-white shadow-sm z-10"></div>
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                   <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                     <span className="text-terra-600 font-bold text-lg mb-2 block">Step {index + 1}</span>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                     <p className="text-gray-600">{step.description}</p>
                   </div>
                </div>
                
                {/* Empty Side for Grid Balance */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Packages Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-terra-700 font-heading mb-4">Investment Packages & Proven ROI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our turnkey solutions designed for different terrains and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Package 1: Mobile */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 font-heading">The "Pop-Up Profit"</h3>
                <p className="text-terra-600 font-medium">Starter Mobile Package</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Investment From</span>
                  <div className="text-3xl font-bold text-terra-700">ZAR 1,000,000</div>
                </div>
              </div>
              <div className="p-8 flex-1">
                <p className="text-gray-600 mb-6">
                  Enter the adventure market with a low-risk, high-reward model. Features 9 engaging obstacles (5m long, 1.6m high) enabling easy supervision.
                </p>
                <p className="text-sm font-bold text-gray-900 mb-2">Ideal For:</p>
                <p className="text-sm text-gray-600 mb-6">Pop-up events, seasonal locations, marketing activations, shopping malls.</p>
              </div>
            </div>

            {/* Package 2: Treetop */}
            <div className="bg-white border-2 border-terra-500 rounded-2xl shadow-md overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-terra-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="bg-terra-50 p-6 border-b border-terra-100">
                <h3 className="text-2xl font-bold text-gray-900 font-heading">The "Forest Canopy"</h3>
                <p className="text-terra-600 font-medium">Classic Treetop Package</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Investment From</span>
                  <div className="text-3xl font-bold text-terra-700">ZAR 3,000,000</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6">
                  Our flagship eco-adventure. Includes 3 distinct courses with 12 obstacles each (5-15m high) plus 2 zip lines. Uses patented Tree-HuggerClips®.
                </p>
                
                <div className="mt-auto bg-gray-900 rounded-xl p-5 text-white shadow-inner">
                  <h4 className="text-terra-400 text-sm font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Proven Business Model</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Users className="h-4 w-4"/> Simultaneous Capacity</span>
                      <span className="font-bold">60 Guests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Users className="h-4 w-4"/> Daily Throughput</span>
                      <span className="font-bold">Up to 240 Guests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Ticket className="h-4 w-4"/> Ticket Price</span>
                      <span className="font-bold">R280 - R360</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-2">
                      <span className="flex items-center gap-2 text-terra-300 font-bold"><TrendingUp className="h-4 w-4"/> Potential Daily Rev.</span>
                      <span className="font-bold text-terra-300 text-lg">R67,200 - R86,400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3: Adrenaline */}
            <div className="bg-white border-2 border-terra-500 rounded-2xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-terra-50 p-6 border-b border-terra-100">
                <h3 className="text-2xl font-bold text-gray-900 font-heading">The "Urban Thrill"</h3>
                <p className="text-terra-600 font-medium">Premium Adrenaline Package</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Investment From</span>
                  <div className="text-3xl font-bold text-terra-700">ZAR 3,800,000</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6">
                  Maximize thrills on any terrain. Pole-based park with 3 intense courses (12 obstacles each, 5-15m high). High capacity design.
                </p>
                
                <div className="mt-auto bg-gray-900 rounded-xl p-5 text-white shadow-inner">
                  <h4 className="text-terra-400 text-sm font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Proven Business Model</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Users className="h-4 w-4"/> Simultaneous Capacity</span>
                      <span className="font-bold">60 Guests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Users className="h-4 w-4"/> Daily Throughput</span>
                      <span className="font-bold">Up to 240 Guests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-300"><Ticket className="h-4 w-4"/> Ticket Price</span>
                      <span className="font-bold">R280 - R360</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-2">
                      <span className="flex items-center gap-2 text-terra-300 font-bold"><TrendingUp className="h-4 w-4"/> Potential Daily Rev.</span>
                      <span className="font-bold text-terra-300 text-lg">R67,200 - R86,400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 4: Zip Line */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 font-heading">The "Valley Flyer"</h3>
                <p className="text-terra-600 font-medium">Zip Line Add-On</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Investment From</span>
                  <div className="text-3xl font-bold text-terra-700">ZAR 2,400,000</div>
                </div>
              </div>
              <div className="p-8 flex-1">
                <p className="text-gray-600 mb-6">
                  Amplify your park's appeal. Features 5 powerful zip lines, each up to 300 meters long. A major attraction that boosts per-guest spending.
                </p>
                <p className="text-sm font-bold text-gray-900 mb-2">Ideal For:</p>
                <p className="text-sm text-gray-600 mb-6">Adding a flagship attraction to any park type, utilizing dramatic topography.</p>
              </div>
            </div>

            {/* Package 5: Group Racer (Spans 2 columns) */}
            <div className="md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 z-10">HIGH CAPACITY</div>
              <div className="p-8 md:w-2/5 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white font-heading">The "Group Racer"</h3>
                <p className="text-yellow-400 font-medium text-lg">Multi-Line Experience</p>
                <div className="mt-6">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">Investment</span>
                  <div className="text-3xl font-bold text-white">Custom Quote</div>
                  <div className="text-sm text-gray-400 mt-1">Typically from ZAR 1.8M</div>
                </div>
                <Link to="/contact" className="mt-6">
                  <Button variant="white" className="w-full">
                    Request Racer Quote
                  </Button>
                </Link>
              </div>
              <div className="p-8 md:w-3/5 text-gray-300 flex flex-col justify-center">
                 <p className="mb-6 text-lg">
                   Unlock the ultimate group thrill. 2-6 parallel zip lines create unforgettable social moments and friendly competition.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Flag className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-sm">Parallel Racing</h4>
                        <p className="text-xs">Friends race side-by-side.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-sm">Group Bookings</h4>
                        <p className="text-xs">Ideal for team building & parties.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-sm">Highest Revenue/Hr</h4>
                        <p className="text-xs">Rapid throughput design.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-sm">Viral Marketing</h4>
                        <p className="text-xs">Highly shareable experience.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-gray-900 mb-6">Ready to calculate your specific ROI?</p>
            <Link to="/contact">
              <Button variant="primary" className="h-14 px-8 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Request a Custom Business Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Investment & Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-terra-700 font-heading mb-6">
              A Transparent Investment
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe in open books and realistic projections. Unlike competitors who hide hidden fees, TerraFit Parks provides a comprehensive "Total Project Cost" assessment during the Profitability Validation phase.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Adventure parks offer one of the fastest ROIs in the leisure industry, with many of our partners reaching break-even in under 18 months.
            </p>
            
            <div className="bg-terra-50 border border-terra-100 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-terra-800 mb-2">Investment Highlights</h4>
              <ul className="list-disc list-inside text-terra-900 space-y-2">
                <li>Turnkey equipment packages</li>
                <li>Low staffing ratios (1 staff per 15 participants)</li>
                <li>High-margin add-ons (photos, gloves, merchandise)</li>
                <li>Scalable designs allow phased investment</li>
              </ul>
            </div>

            <Link to="/investment-guide">
              <Button variant="secondary" className="flex items-center gap-2 h-14 px-8">
                <Download className="h-5 w-5" />
                View Full Investment Guide (Digital)
              </Button>
            </Link>
          </div>

          {/* Calculator */}
          <div className="relative z-10">
            <ROICalculator />
          </div>

        </div>
      </div>
    </div>
  );
};
