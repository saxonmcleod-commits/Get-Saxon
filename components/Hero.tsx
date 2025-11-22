import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-zinc-900 text-white overflow-hidden">
      {/* Background overlay with image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Modern office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Freelance Web Developer & Consultant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Get Saxon. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400">
              Websites that build your business.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            I help businesses of all sizes stop losing customers to bad design. I build high-performance, custom websites personally tailored to turn your visitors into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg shadow-indigo-900/50 transition-all transform hover:scale-105"
            >
              Get Your Free Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-base font-medium rounded-full text-zinc-300 hover:bg-zinc-800 hover:text-white md:text-lg transition-colors"
            >
              See What I Do
            </a>
          </div>
          
          <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-wrap gap-8 text-sm text-zinc-500 font-medium">
            <span>// Custom Development</span>
            <span>// SEO Optimized</span>
            <span>// Direct Communication</span>
            <span>// No Agencies, Just Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};