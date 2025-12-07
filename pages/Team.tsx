import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Building2, MapPin, Award } from 'lucide-react';
import { Button } from '../components/Button';

interface TeamMemberProps {
  name: string;
  role: string;
  focus: string;
  location: string;
  image: string;
  bio: string;
  links: { label: string; url: string }[];
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, focus, location, image, bio, links }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
        <h3 className="text-2xl font-bold text-white font-heading">{name}</h3>
        <p className="text-terra-300 font-medium text-sm uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <MapPin className="h-4 w-4 text-terra-500" />
        <span>{location}</span>
      </div>
      
      <div className="mb-6">
        <span className="bg-terra-50 text-terra-700 text-xs font-bold px-2 py-1 rounded border border-terra-200">
          Focus: {focus}
        </span>
      </div>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
        {bio}
      </p>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <p className="text-xs font-bold text-gray-400 uppercase mb-3">Affiliated Ventures</p>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-terra-600 hover:text-terra-800 transition-colors group"
              >
                <Globe className="h-3 w-3 group-hover:scale-110 transition-transform" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const Team: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Didier Duc",
      role: "Executive Director & Founder",
      focus: "African Market Strategy",
      location: "South Africa",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80", // Placeholder: Professional Creative/Business
      bio: "With over 15 years in African tourism and hospitality development, Didier identified the critical gap in quality adventure infrastructure across the continent. His experience launching successful ventures like TerraFit Trail provides invaluable insight into what makes attractions thrive in African markets. Didier leads our market strategy and ensures every TerraFit park is tailored for local success.",
      links: [
        { label: "Absolute Owl", url: "https://absoluteowl.wordpress.com/" },
        { label: "SensCare", url: "https://senscare.co.za/" },
        { label: "JBay Zebra Lodge", url: "https://jbayzebralodge.co.za/" },
        { label: "TerraFit Trail", url: "https://terrafit-trail.com/" }
      ]
    },
    {
      name: "Alex Darko",
      role: "Non-Executive Chairman",
      focus: "Strategic Advisory & Governance",
      location: "South Africa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", // Placeholder: Corporate Senior
      bio: "Bringing decades of corporate governance and strategic planning experience, Alex ensures TerraFit Parks operates with the highest standards of business excellence. His background in healthcare innovation through SensCare demonstrates his commitment to creating positive community impact—a value central to the TerraFit mission.",
      links: [
        { label: "SensCare", url: "https://senscare.co.za/" }
      ]
    },
    {
      name: "Klemen Zupanc",
      role: "Executive Director & Technical Lead",
      focus: "Engineering & Manufacturing",
      location: "Slovenia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", // Placeholder: Technical/Outdoor
      bio: "With over 20 years designing and building adventure parks across Europe, Klemen brings unparalleled technical expertise to TerraFit Parks. As the driving force behind both ZUPI (manufacturing) and Vevrca (park operations), he ensures every system meets the highest European safety standards while being adapted for African conditions.",
      links: [
        { label: "ZUPI Engineering", url: "https://www.zupi.si/" },
        { label: "Vevrca Parks", url: "https://www.vevrca.si/en/" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-terra-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl font-heading mb-6">
            Meet Our Leadership Team
          </h1>
          <p className="text-xl text-terra-200 max-w-3xl mx-auto">
            Combining African Vision with European Engineering Excellence.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-600 leading-relaxed">
          At TerraFit Parks, we bring together visionary African entrepreneurship and decades of Slovenian adventure park engineering. Our leadership team represents the perfect fusion of local market understanding and world-class technical expertise.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-terra-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-terra-500"></div>
            
            <h2 className="text-3xl font-bold text-terra-800 font-heading mb-8">
              "African Vision × Slovenian Precision = Unbeatable Parks"
            </h2>
            
            <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
              We believe the future of African adventure tourism lies in a synergistic approach. We don't just import equipment; we import expertise and adapt it to the unique rhythms and requirements of the local market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
              {[
                { title: "Local Market Intelligence", desc: "Didier & Alex ensure relevance.", icon: <Award className="h-6 w-6 text-terra-500" /> },
                { title: "World-Class Engineering", desc: "Klemen ensures safety & durability.", icon: <Building2 className="h-6 w-6 text-terra-500" /> },
                { title: "Community Design", desc: "Parks that serve families & locals.", icon: <Users className="h-6 w-6 text-terra-500" /> }, // Using imported Users icon not avail in this file, swapping to generic div or imported icon
                { title: "Sustainable Models", desc: "Built for long-term profit.", icon: <Globe className="h-6 w-6 text-terra-500" /> }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-terra-800 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white font-heading mb-6">
            Ready to Build with Africa's Adventure Experts?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="white" className="h-14 px-8 text-lg font-bold">
                Schedule a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for local icon usage
function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
