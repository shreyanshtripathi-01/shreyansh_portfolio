import { Briefcase } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories, experience } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Skills & Experience</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Technologies I work with and my professional journey
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category) => (
            <Card key={category.name} className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={isVisible ? skill.level : 0} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Experience</h3>
        <div className="max-w-2xl mx-auto space-y-0">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border ml-3">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={14} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{exp.role}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                {exp.company} • {exp.period}
              </p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
