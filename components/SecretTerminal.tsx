import React, { useEffect, useState } from 'react';
import { X, Terminal, Copy, Check, Lock } from 'lucide-react';

interface SecretTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretTerminal: React.FC<SecretTerminalProps> = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [accessGranted, setAccessGranted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLines([]);
      setAccessGranted(false);
      
      // SPEED RUN TIMELINE
      // 1. Start immediately
      setTimeout(() => {
        setLines(["> CONNECTING TO SAXON_DEV..."]);
      }, 100);

      // 2. Verify
      setTimeout(() => {
        setLines(prev => [...prev, "> VERIFYING DEVELOPER CREDENTIALS..."]);
      }, 500);

      // 3. Scan
      setTimeout(() => {
        setLines(prev => [...prev, "> SCANNING FOR GENERIC TEMPLATES..."]);
      }, 900);

      // 4. Scan Result
      setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[newLines.length - 1] = "> SCANNING FOR GENERIC TEMPLATES... 0 FOUND.";
          return newLines;
        });
      }, 1500);

      // 5. Access Granted
      setTimeout(() => {
        setLines(prev => [...prev, "> ACCESS GRANTED."]);
        setAccessGranted(true);
      }, 1800);
    }
  }, [isOpen]);

  const copyCode = () => {
    navigator.clipboard.writeText("DEV_MATRIX_05");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <style>
        {`
          @keyframes dot-anim {
            0% { content: '.'; }
            33% { content: '..'; }
            66% { content: '...'; }
          }
          .animate-dots::after {
            content: '.';
            animation: dot-anim 1s infinite steps(1);
          }
        `}
      </style>
      
      <div className="w-full max-w-lg bg-zinc-950 border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20 font-mono overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2 text-green-500 text-xs">
            <Terminal className="w-4 h-4" />
            <span>TERMINAL // SYSTEM_OVERRIDE</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Body - Flex column to push footer to bottom */}
        <div className="p-6 flex flex-col justify-between flex-grow min-h-[320px]">
          
          {/* Output Lines */}
          <div className="space-y-2 text-sm md:text-base font-bold mb-4">
            {lines.map((line, i) => {
              const isLastLine = i === lines.length - 1;
              const isLoading = line.endsWith('...');
              
              if (isLastLine && isLoading) {
                 return (
                   <div key={i} className="text-green-400 animate-in slide-in-from-left-2 duration-100">
                      {line.replace('...', '')}
                      <span className="animate-dots"></span>
                   </div>
                 );
              }

              return (
                <div key={i} className="text-green-400 animate-in slide-in-from-left-2 duration-100">
                  {line}
                </div>
              );
            })}
            
            {!accessGranted && (
              <div className="w-2 h-4 bg-green-500 animate-pulse inline-block ml-1"/>
            )}
          </div>

          {/* REWARD SECTION - Always rendered, content changes based on state */}
          <div className={`pt-6 border-t border-dashed transition-colors duration-500 ${accessGranted ? 'border-green-500/30' : 'border-zinc-800'}`}>
            
            {/* Instructions Text */}
            <p className={`text-sm mb-4 transition-colors duration-300 ${accessGranted ? 'text-zinc-400' : 'text-zinc-600 animate-pulse'}`}>
              {accessGranted 
                ? "You found the hidden node. As a reward for your curiosity, here is a 5% discount code for your first project."
                : "Decrypting secure reward data..."
              }
            </p>
            
            {/* Code Box & Button */}
            <div className="flex gap-3">
              <div className={`flex-1 border rounded px-4 py-3 font-bold tracking-widest text-center select-all transition-all duration-300 ${
                accessGranted 
                  ? 'bg-zinc-900 border-green-500/50 text-green-400' 
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
              }`}>
                {accessGranted ? "DEV_MATRIX_05" : "[ LOCKED ]"}
              </div>
              
              <button 
                onClick={copyCode}
                disabled={!accessGranted}
                className={`font-bold px-4 rounded transition-all flex items-center justify-center gap-2 ${
                  accessGranted 
                    ? 'bg-green-600 hover:bg-green-500 text-black cursor-pointer' 
                    : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                }`}
              >
                {accessGranted 
                  ? (copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />)
                  : <Lock className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};