import { Home, Users, Key, MessageCircle, Shield, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import SocialLinks from "@/components/SocialLinks";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const FeatureCard = ({ icon, title, description, benefits }: FeatureCardProps) => (
  <div 
    className="w-[300px] h-[400px] rounded-lg text-white overflow-hidden relative preserve-3d perspective-1000 
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer hover:rotate-y-10 hover:rotate-x-10 
    hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70] group"
  >
    <div className="p-6 relative z-10 flex flex-col gap-4 items-center justify-start text-center h-full">
      <div className="p-4 bg-white/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold uppercase">
        {title}
      </h3>
      <p className="text-white/80 text-sm">
        {description}
      </p>
      <ul className="space-y-2 mt-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-white/80">
            <span className="h-1.5 w-1.5 bg-white rounded-full" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Gradient overlays for hover effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 
      transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[1]
      group-hover:translate-x-[-100%]" 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 
      transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[1]
      group-hover:translate-x-[100%]" 
    />
  </div>
);

const features: FeatureCardProps[] = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Roommate Matching",
    description: "Find your ideal roommate through our structured, preference-based matching system.",
    benefits: [
      "Matching based on Lifestyle Preferences",
      "Customizable compatibility criteria",
      "Transparent rule-based matching"
    ]
  },
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Property Listings",
    description: "Discover the perfect property with our comprehensive search and filter system.",
    benefits: [
      "Detailed property information",
      "Advanced filtering options",
      "Real-time availability updates",
      "Save favorite properties"
    ]
  },
  {
    icon: <Key className="w-8 h-8 text-white" />,
    title: "Secure Booking",
    description: "Book your new home with confidence through our secure reservation system.",
    benefits: [
      "Structured booking process",
      "Secure payment integration",
      "Booking status tracking",
      "Automated payment reminders"
    ]
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "In-App Messaging",
    description: "Stay connected with landlords and potential roommates through our messaging system.",
    benefits: [
      "Real-time conversations",
      "Push notifications",
      "Message history tracking",
      "File and image sharing"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "User Verification",
    description: "Build trust in the community with verified profiles and detailed user information.",
    benefits: [
      "Identity verification",
      "Detailed user profiles",
      "Review and rating system",
      "Profile privacy controls"
    ]
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Property Management",
    description: "Efficient tools for landlords to manage their properties and tenants.",
    benefits: [
      "Property listing management",
      "Tenant application tracking",
      "Maintenance request handling",
      "Occupancy tracking"
    ]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Better Co-Living
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover all the tools and features designed to make your co-living experience 
              seamless, secure, and enjoyable.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-black/30 backdrop-blur-sm py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Co-Living Space?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community today and experience a smarter way to find roommates 
              and manage your co-living arrangements.
            </p>
            <button className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] 
              text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Features; 