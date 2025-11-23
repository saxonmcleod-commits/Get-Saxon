import React from 'react';
import { MonitorPlay, BarChart3, Workflow, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Custom Website Development",
    description: "I don't rely on generic, slow templates. I hand-craft fast, secure, and mobile-responsive websites that perfectly align with your brand identity and business goals.",
    icon: MonitorPlay,
  },
  {
    title: "SEO & Performance",
    description: "I optimize every site for search engines and speed. Whether you're a local shop or a global SaaS, I ensure your customers can find you and your site loads instantly.",
    icon: BarChart3,
  },
  {
    title: "Systems & Automation",
    description: "I connect your website directly to your business tools. From CRMs like Zoho to email marketing platforms, I build automations that save you time and capture every lead.",
    icon: Workflow,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="bg-zinc-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">What I Do</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Digital Solutions, Personal Touch.</h3>
          <p className="text-xl text-zinc-600 leading-relaxed">
            You deal directly with me. No account managers, no outsourcing. Just expert development focused on your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-10 shadow-xl shadow-zinc-200/50 border border-zinc-100 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h4>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                Start a conversation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};