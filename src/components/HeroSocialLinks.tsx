import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { useEffect, useState } from "react";

import "../styles/HeroSocialLinks.css";

export const HeroSocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github className="social-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="social-icon" />
      </a>
    </div>
  );
}