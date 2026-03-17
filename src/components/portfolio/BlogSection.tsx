import { useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, BlogPost } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Blog</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Thoughts, tutorials, and insights
        </p>

        {/* Article view */}
        {selectedPost ? (
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" onClick={() => setSelectedPost(null)} className="mb-4">
              <ArrowRight size={14} className="rotate-180 mr-1" /> Back to articles
            </Button>
            <article>
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedPost.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {new Date(selectedPost.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {selectedPost.readTime}
                </span>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line leading-relaxed">
                {selectedPost.content}
              </div>
            </article>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => (
              <Card
                key={post.id}
                className="group cursor-pointer border-border/50 hover:shadow-lg hover:border-border transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedPost(post)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
