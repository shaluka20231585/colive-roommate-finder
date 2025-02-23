import { Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

// Import images using dynamic imports to ensure proper bundling
import ShalukaImg from "../assets/Shaluka.jpeg";
import BemalImg from "../assets/Bemal.jpeg";
import DilshanImg from "../assets/Dilshan.jpeg";
import JoshanthImg from "../assets/Joshanth.jpeg";
import UdayangaImg from "../assets/Udayanga.jpeg";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMemberCard = ({ name, role, description, image, links }: TeamMemberCardProps) => (
  <div 
    className="w-[300px] h-[400px] rounded-lg text-white overflow-hidden relative preserve-3d perspective-1000 
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer hover:rotate-y-10 hover:rotate-x-10 
    hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70] group"
  >
    <div className="p-6 relative z-10 flex flex-col gap-4 items-center justify-start text-center h-full">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold uppercase">
        {name}
      </h3>
      <p className="text-white/80 text-sm">
        {role}
      </p>
      <p className="text-white/80 text-xs">
        {description}
      </p>
      <div className="flex gap-4 mt-auto">
        {links.github && (
          <a 
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {links.linkedin && (
          <a 
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {links.email && (
          <a 
            href={`mailto:${links.email}`}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>
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

const teamMembers: TeamMemberCardProps[] = [
  {
    name: "Shaluka Perera",
    role: "Project Manager and UI/UX Designer",
    description: "Leader of the Project.",
    image: ShalukaImg,
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/shaluka-perera-413963310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "shalukaperera14@gmail.com"
    }
  },
  {
    name: "Bemal Jayasinghe",
    role: "Front End Developer/ Marketing Manager",
    description: "Head Of The Marketing Department",
    image: BemalImg,
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/bemal-jayasinghe-b77a162a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "member2@example.com"
    }
  },
  {
    name: "Dilshan Manohara",
    role: "Backend Developer And Database Manager",
    description: "Head Of The Back End Actions",
    image: DilshanImg,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "member3@example.com"
    }
  },
  {
    name: "Terence Joshanth",
    role: "Backend Developer",
    description: "Handling the Backend of the Project",
    image: JoshanthImg,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "member4@example.com"
    }
  },
  {
    name: "Givindu Udayanga",
    role: "Front End Developer 2",
    description: "Handling the Front End of the Project",
    image: UdayangaImg,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "member5@example.com"
    }
  }
];

const Team = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know the talented individuals behind CoLive who are working together 
              to revolutionize co-living experiences.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-black/30 backdrop-blur-sm py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              revolutionizing the co-living experience.
            </p>
            <button className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] 
              text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;