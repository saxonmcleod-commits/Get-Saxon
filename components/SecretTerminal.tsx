import React, { useEffect, useState } from 'react';
import { X, Terminal, Copy, Check } from 'lucide-react';

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
      
      const sequence = [
        { text: "> CONNECTING TO SAXON_DEV...", delay: 500 },
        { text: "> VERIFYING DEVELOPER CREDENTIALS...", delay: 1200 },
        { text: "> SCANNING FOR GENERIC TEMPLATES... 0 FOUND.", delay: 2000 },
        { text: "> ACCESS GRANTED.", delay: 2800 },
      ];

      let timeouts: NodeJS.Timeout[] = [];

      sequence.forEach(({ text, delay }) => {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, text]);
        }, delay);
        timeouts.push(timeout);
      });

      const finalTimeout = setTimeout(() => {
        setAccessGranted(true);
      }, 3500);
      timeouts.push(finalTimeout);

      return () => timeouts.forEach(clearTimeout);
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
      <div className="w-full max-w-lg bg-zinc-950 border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20 font-mono overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2 text-green-500 text-xs">
            <Terminal className="w-4 h-4" />
            <span>TERMINAL // SYSTEM_OVERRIDE</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 min-h-[300px] flex flex-col justify-between">
          <div className="space-y-2 text-sm md:text-base">
            {lines.map((line, i) => (
              <div key={i} className="text-green-400 animate-in slide-in-from-left-2 duration-300">
                {line}
              </div>
            ))}
            {lines.length < 4 && (
              <div className="w-2 h-4 bg-green-500 animate-pulse inline-block ml-1"/>
            )}
          </div>

          {/* Success State */}
          {accessGranted && (
            <div className="mt-8 pt-6 border-t border-dashed border-green-500/30 animate-in zoom-in-95 duration-500">
              <p className="text-zinc-400 text-sm mb-4">
                You found the hidden node. As a reward for your curiosity, here is a 5% discount code for your first project.
              </p>
              
              <div className="flex gap-3">
                <div className="flex-1 bg-zinc-900 border border-green-500/50 rounded px-4 py-3 text-green-400 font-bold tracking-widest text-center select-all">
                  DEV_MATRIX_05
                </div>
                <button 
                  onClick={copyCode}
                  className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};