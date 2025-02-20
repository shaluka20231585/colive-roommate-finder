import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import TrustSignals from "@/components/TrustSignals";
import AnimatedBackground from "@/components/AnimatedBackground";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <TrustSignals />
        <Newsletter />
      </div>
      <SocialLinks />
    </main>
  );
};

export default Index;
