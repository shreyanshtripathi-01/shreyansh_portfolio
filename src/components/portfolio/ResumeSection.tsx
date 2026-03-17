import { Download, GraduationCap, Briefcase, Award, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, aboutMe, experience, achievements, certificates } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ResumeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Resume</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          My education, experience & achievements
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-border ml-2 space-y-6">
              <div>
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                <p className="font-medium text-foreground text-sm">{aboutMe.education.degree}</p>
                <p className="text-xs text-muted-foreground mb-1">{aboutMe.education.university}</p>
                <p className="text-xs text-muted-foreground">{aboutMe.education.year} • CGPA: 7.1</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-33px] top-0 w-4 h-4 rounded-full bg-primary/60 border-2 border-background" />
                <p className="font-medium text-foreground text-sm">Intermediate</p>
                <p className="text-xs text-muted-foreground mb-1">Tagore Public School, Jaipur</p>
                <p className="text-xs text-muted-foreground">2022 – 2023 • 65%</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-33px] top-0 w-4 h-4 rounded-full bg-primary/40 border-2 border-background" />
                <p className="font-medium text-foreground text-sm">Matriculation</p>
                <p className="text-xs text-muted-foreground mb-1">Tagore Public School, Jaipur</p>
                <p className="text-xs text-muted-foreground">2020 – 2021 • 92%</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 pb-6 last:pb-0 border-l-2 border-border ml-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                  <p className="font-medium text-foreground text-sm">{exp.role}</p>
                  <p className="text-xs text-muted-foreground mb-1">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-xs text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Certificates</h3>
              </div>
              <ul className="space-y-2">
                {certificates.map((cert, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{cert.name}</span> — {cert.issuer} ({cert.date})
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div id="achievements" className="mt-8 scroll-m-20">
              <div className="flex items-center gap-2 mb-4">
                <Award size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Achievements</h3>
              </div>
              <ul className="space-y-2">
                {achievements.map((a, i) => (
                  <li key={i} className="text-sm text-muted-foreground">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download size={16} className="mr-1" /> Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
