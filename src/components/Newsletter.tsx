import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your interest! We'll keep you updated about the project.");
    setEmail('');
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center bg-black/20 backdrop-blur-sm border border-white/10 
          rounded-2xl p-10 hover:bg-black/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Stay Updated with Project Development
          </h3>
          <p className="text-gray-300 mb-8">
            Get notified about new features, updates, and development progress
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-black/30 border border-white/10 
                text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] 
                text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 
                transition-all duration-300 hover:scale-105"
            >
              <span>Subscribe</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
