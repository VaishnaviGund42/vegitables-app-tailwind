import React from "react";
import { Instagram, Youtube, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/VaishnaviGund42/vegitables-app-tailwind",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/feed/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: Youtube,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/explore/?hl=en",
    icon: Instagram,
  },
];

const FooterLink = ({ name, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white text-sm"
    >
      <Icon size={18} />
      <span>{name}</span>
    </a>
  );
};

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-emerald-900 text-white mt-10">
      
      <div className="max-w-6xl mx-auto py-6 flex flex-col items-center gap-4">
        
        <div className="text-lg font-semibold tracking-wide">
          🌿 VeggieHub - Freshness Delivered Daily
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>

        <div className="text-xs opacity-80">
          © {new Date().getFullYear()} Vegitables-app. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
