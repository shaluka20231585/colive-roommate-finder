import { Code, Layout, Bot } from 'lucide-react';

const TrustSignals = () => {
  const signals = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Built with React.js, TypeScript, and Tailwind CSS for a robust and maintainable codebase"
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Fully responsive interface that works seamlessly across all devices and screen sizes"
    },
    {
      icon: Bot,
      title: "Advanced Algorithm",
      description: "Advanced matching algorithm to find compatible roommates"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in bg-black/20 backdrop-blur-sm border border-white/10 
                rounded-xl p-8 hover:bg-black/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70] mb-6">
                <signal.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{signal.title}</h3>
              <p className="text-gray-300">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
