import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Features", href: "/features" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Documentation", href: "#documentation" },
    { name: "GitHub", href: "https://github.com" },
  ];

  const isExternalLink = (href: string) => href.startsWith('http') || href.startsWith('#');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-white">
            CoLive
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-white font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg 
              transition-all duration-300 backdrop-blur-sm border border-white/10">
              View Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-gray-300 hover:text-white transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-white font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white px-6 py-2 
              rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10">
              View Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
