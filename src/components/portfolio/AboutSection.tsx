import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { personalInfo, aboutMe } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">About Me</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Get to know me and my background
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-background"
              />
              <div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {aboutMe.bio}
            </p>

            <div className="flex items-center gap-2 mb-2 text-sm text-foreground">
              <GraduationCap size={16} className="text-primary" />
              <span className="font-medium">{aboutMe.education.degree}</span>
            </div>
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>
                {aboutMe.education.university} • {aboutMe.education.year}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {aboutMe.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
