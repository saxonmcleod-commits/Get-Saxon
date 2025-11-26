import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Founder, Artisan Coffee Co.",
    quote: "Working with Saxon was a breath of fresh air. I finally have a website that reflects the quality of my brand. The personal attention I received was unmatched by big agencies.",
    avatarUrl: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Marketing Director, TechFlow",
    quote: "I needed a landing page turned around quickly for a new product launch. Saxon delivered high-quality code that integrated perfectly with our existing stack.",
    avatarUrl: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Sarah Palmer",
    role: "Principal, Palmer Consulting",
    quote: "I didn't just get a website; I got a partner who understands digital strategy. My inbound leads have increased significantly since the redesign.",
    avatarUrl: "https://picsum.photos/100/100?random=12"
  }
];

// Duplicate testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-zinc-900 py-24 md:py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Business Owners</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            I take pride in building long-term relationships with my clients. Here's what they have to say about working with me.
          </p>
        </div>

        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-8"
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-zinc-800/50 backdrop-blur border border-zinc-700 p-8 rounded-2xl relative flex-shrink-0 w-[350px] md:w-[400px] hover:bg-zinc-800 transition-colors"
              >
                <Quote className="absolute top-6 right-6 text-zinc-700 w-10 h-10 opacity-50" />
                <div className="flex gap-1 text-indigo-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-zinc-700/50 pt-6">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-sm text-zinc-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};