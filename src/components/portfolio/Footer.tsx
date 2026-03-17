import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
          <Heart size={12} className="text-destructive" /> and React.
        </p>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
