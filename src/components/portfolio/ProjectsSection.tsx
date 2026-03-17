import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Projects</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
          A selection of things I've built
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...allTags].map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="text-xs"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 hover:shadow-lg hover:border-border transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-1.5">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="text-xs">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="text-xs">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
