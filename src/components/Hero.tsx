import { Search } from 'lucide-react';

const GradientButton = ({ children }: { children: React.ReactNode }) => (
  <button className="relative px-6 py-3 rounded-lg overflow-hidden group">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0ce39a] via-[#69007f] to-[#fc0987]" />
    
    {/* Dark overlay that fades on hover */}
    <div className="absolute inset-[1px] bg-black rounded-lg transition-opacity duration-500 group-hover:opacity-70" />
    
    {/* Blurred gradient that appears on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0ce39a] via-[#69007f] to-[#fc0987] 
      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    
    {/* Content */}
    <div className="relative z-10">
      <p className="text-sm text-gray-300">
        <span className="font-semibold text-white">{children}</span>
      </p>
    </div>
  </button>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-12 text-center">
        <span className="inline-block animate-fade-in bg-white/5 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          Roommate Finding Platform
        </span>
        <h1 className="animate-fade-in text-4xl md:text-6xl font-bold mb-6 text-white">
          CoLive <br />
          <span className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            Find Your Perfect Match
          </span>
        </h1>
        <p className="animate-fade-in text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
          A modern platform built with React, TypeScript, And Java to revolutionize 
          how people find compatible roommates and ideal living spaces.
        </p>
        
        <div className="animate-fade-in max-w-xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 flex items-center p-2 rounded-full">
            <Search className="ml-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Try the search feature..."
              className="flex-1 p-2 bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] 
              text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Demo Search
            </button>
          </div>
        </div>

        <div className="animate-fade-in mt-12 flex flex-wrap justify-center gap-8">
          <GradientButton>React.js Frontend</GradientButton>
          <GradientButton>Java Powered</GradientButton>
          <GradientButton>Enhanced Algorithm</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
