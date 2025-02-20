import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/colive.roommatefinder?igsh=MTR5ejNydDZrczA4cg==",
      label: "Follow us on Instagram",
      hoverColor: "hover:text-pink-500"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "Connect with us on LinkedIn",
      hoverColor: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Follow us on Twitter",
      hoverColor: "hover:text-sky-500"
    },
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Like us on Facebook",
      hoverColor: "hover:text-blue-600"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col gap-4 items-center bg-black/20 backdrop-blur-sm 
        rounded-full p-4 border border-white/10">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`text-white/70 transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
