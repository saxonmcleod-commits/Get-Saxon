import React, { useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { SecretTerminal } from './SecretTerminal'; // Import the new component

export const Hero: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden min-h-[90vh] flex items-center selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* THE SECRET TERMINAL MODAL */}
      <SecretTerminal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />

      {/* BACKGROUND CODE LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto select-text">
        <style>
          {`
            @keyframes code-scroll {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            .animate-code-scroll {
              animation: code-scroll 60s linear infinite;
            }
            .animate-code-scroll:hover {
              animation-play-state: paused;
            }
            /* Add a glow effect to the secret trigger on hover */
            .secret-trigger { cursor: pointer; transition: all 0.3s; }
            .secret-trigger:hover { text-shadow: 0 0 8px rgba(74, 222, 128, 0.5); color: #4ade80; }
          `}
        </style>

        <div className="w-full font-mono text-xs md:text-sm lg:text-base leading-relaxed opacity-25 hover:opacity-60 transition-opacity duration-500 animate-code-scroll">
             <div className="p-6 md:p-10 whitespace-pre text-zinc-600">
                {[1, 2].map((i) => (
                  <React.Fragment key={i}>
                    <code>
<span className="text-violet-500">import</span> <span className="text-blue-400">React</span> <span className="text-violet-500">from</span> <span className="text-green-400">'react'</span>;{'\n'}
<span className="text-violet-500">import</span> <span className="text-yellow-200">{`{`}</span> <span className="text-blue-400">Creativity</span><span className="text-zinc-500">,</span> <span className="text-blue-400">Logic</span> <span className="text-yellow-200">{`}`}</span> <span className="text-violet-500">from</span> <span className="text-green-400">'@saxon/brain'</span>;{'\n'}
{/* ... (previous code lines remain the same) ... */}
<span className="text-violet-500">const</span> <span className="text-blue-400">ui</span> <span className="text-zinc-500">=</span> <span className="text-violet-500">new</span> <span className="text-yellow-200">Interface</span><span className="text-yellow-200">({`{`}</span> <span className="text-blue-400">clean</span>: <span className="text-violet-500">true</span><span className="text-zinc-500">,</span> <span className="text-blue-400">fast</span>: <span className="text-violet-500">true</span> <span className="text-yellow-200">{`}`});</span>{'\n'}
{'\n'}
{/* THIS IS THE INTERACTIVE PART 👇 */}
<span 
  className="text-zinc-500 italic secret-trigger"
  onClick={() => setShowTerminal(true)}
>
  {'    // Secret: Click to execute System_Override(5%)'}
</span>{'\n'}
<span className="text-blue-400">this</span><span className="text-zinc-500">.</span><span className="text-yellow-200">injectSoul</span><span className="text-yellow-200">(</span><span className="text-green-400">"🍺"</span><span className="text-yellow-200">);</span>{'\n'}
{/* ... (rest of code) ... */}
                    </code>
                  </React.Fragment>
                ))}
            </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content (remains unchanged) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48 z-10 pointer-events-none">
        <div className="lg:w-3/4 pointer-events-auto">
             {/* ... Your existing H1, Buttons, etc ... */}
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <Rocket className="w-4 h-4" />
                <span>Freelance Web Developer & Consultant</span>
            </div>
             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Get Saxon. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400">
              Websites that build your business.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
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
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-base font-medium rounded-full text-zinc-300 hover:bg-zinc-800 hover:text-white md:text-lg transition-colors bg-zinc-950/50 backdrop-blur-sm"
            >
              See What I Do
            </a>
          </div>
          
          <div className="mt-12 border-t border-zinc-800/50 pt-8 flex flex-wrap gap-8 text-sm text-zinc-500 font-medium">
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