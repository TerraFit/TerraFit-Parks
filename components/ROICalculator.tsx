import React, { useState, useMemo } from 'react';
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [visitors, setVisitors] = useState<number>(150);
  const [price, setPrice] = useState<number>(45);
  const [days, setDays] = useState<number>(200);

  const annualRevenue = useMemo(() => {
    return visitors * price * days;
  }, [visitors, price, days]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-terra-700 p-6 text-white">
        <h3 className="text-2xl font-bold font-heading flex items-center gap-2 text-white">
          <TrendingUp className="h-6 w-6 text-terra-300" />
          See Your Potential ROI
        </h3>
        <p className="text-terra-100 mt-2 text-sm">
          Estimate your gross annual revenue based on conservative projections.
        </p>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Daily Visitors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-terra-600" />
              Daily Visitors
            </label>
            <input
              type="number"
              min="0"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-terra-500 focus:border-terra-500 transition-all text-lg"
            />
            <input 
              type="range" 
              min="10" 
              max="1000" 
              value={visitors} 
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full mt-3 accent-terra-600"
            />
          </div>

          {/* Ticket Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-terra-600" />
              Avg. Ticket Price ($)
            </label>
            <input
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-terra-500 focus:border-terra-500 transition-all text-lg"
            />
            <input 
              type="range" 
              min="10" 
              max="150" 
              value={price} 
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full mt-3 accent-terra-600"
            />
          </div>

          {/* Operating Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-terra-600" />
              Operating Days / Year
            </label>
            <input
              type="number"
              min="0"
              max="365"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-terra-500 focus:border-terra-500 transition-all text-lg"
            />
            <input 
              type="range" 
              min="30" 
              max="365" 
              value={days} 
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full mt-3 accent-terra-600"
            />
          </div>

        </div>

        <div className="bg-terra-50 rounded-lg p-6 text-center border border-terra-100">
          <p className="text-terra-800 font-medium mb-2 uppercase tracking-wide text-sm">Estimated Annual Revenue</p>
          <p className="text-4xl md:text-5xl font-bold text-terra-700 font-heading">
            ${annualRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-4 italic">
            *Estimates for illustration only. Actual results vary based on location, marketing, and operational costs.
          </p>
        </div>
      </div>
    </div>
  );
};