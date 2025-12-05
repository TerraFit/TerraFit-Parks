import React, { useState } from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission would go here
    alert("Thank you for your interest! We will contact you shortly.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-terra-700 sm:text-5xl font-heading">
            Let's Build Something Amazing
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore the potential of your site? Schedule a discovery call with our park planning experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Info Side */}
          <div className="bg-terra-700 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6 text-white">Contact Information</h3>
              <p className="text-terra-100 mb-8">
                Fill out the form, or reach out to us directly. We look forward to hearing about your project vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-terra-300" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-terra-300" />
                  <span className="text-lg">partners@terrafitparks.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-terra-300" />
                  <span className="text-lg">Mon-Fri, 9am - 5pm MST</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="p-6 bg-terra-800 rounded-xl border border-terra-600">
                 <p className="italic text-terra-50">"The best investment we ever made for our resort. The TerraFit team was with us every step of the way."</p>
                 <p className="font-bold mt-4 text-white">- John Doe, Alpine Resort Owner</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-terra-500 focus:border-terra-500 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-terra-500 focus:border-terra-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-terra-500 focus:border-terra-500 transition-colors"
                  placeholder="Resort Name or Municipality"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your project</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-terra-500 focus:border-terra-500 transition-colors"
                  placeholder="We are looking to build a park in..."
                ></textarea>
              </div>

              <Button type="submit" fullWidth className="h-12 text-lg">
                Schedule a Discovery Call
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};